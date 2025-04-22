import React, { useContext } from 'react';

import { Object } from '../../resources/baseResource';
import { UserInteraction } from '../../resources/userInteractionResource';

import { DataContext } from '../contexts/dataContext';

/**
 * Props required for the Tracking component
 */
export type TrackerProps = {
    dataContext?: UserInteraction.DataContext;
    origin?: string;
    trackers: UserInteraction.Tracker[];
    debounceTime?: number;
} & Object<any>;

/**
 * HOC that returns the provided Component with UserInteraction tracking logic.
 */
export function withTracking(Component: React.ComponentType<any>) {
    /**
     * Returns a Closure component for adding User Interaction Logic
     */
    return function (props: TrackerProps) {
        let eventHandlers: Object<any> = {};

        const {
            trackers,
            origin,
            dataContext: dataContextFromProps,
            ...originalProps
        } = props;

        const dataContext = dataContextFromProps
            ? dataContextFromProps
            : useContext(DataContext);

        function trackUserInteraction(
            e: React.SyntheticEvent,
            tracker: UserInteraction.Tracker,
        ) {
            const targetNode = e.target as HTMLElement;
            const value = getValueFromNode(e);
            const domRect = e.target.getBoundingClientRect();

            const closestComponent = targetNode.closest(
                '[data-element-type="component"]',
            );


            const userInteractionResource = UserInteraction.generateResource(
                dataContext.app,
                tracker.action,
                {
                    context: dataContext.context,
                    ...(origin && {
                        origin,
                    }),
                    component: {
                        currentTarget: Component.displayName || Component.name,
                        target: closestComponent
                            ? closestComponent.getAttribute('data-display-name')
                            : null,
                    },
                    element: {
                        currentTarget: e.currentTarget.nodeName,
                        target: targetNode.nodeName || e.currentTarget.nodeName,
                        innerHTML: targetNode.innerHTML,
                        innerText: targetNode.innerText,
                        ...(value && {
                            value,
                        }),
                        position: {
                            x: Math.round( domRect.x * 1e3 ) / 1e3,
                            y: Math.round( domRect.y * 1e3 ) / 1e3,
                            top: Math.round( domRect.top * 1e3 ) / 1e3,
                            right: Math.round( domRect.right * 1e3 ) / 1e3,
                            bottom: Math.round( domRect.bottom * 1e3 ) / 1e3,
                            left: Math.round( domRect.left * 1e3 ) / 1e3,
                        },
                        dimensions: {
                            width: Math.round( domRect.width * 1e3 ) / 1e3,
                            height: Math.round( domRect.height * 1e3 ) / 1e3,
                        },
                    },
                },
                tracker.data,
            );

            tracker.track(e, userInteractionResource);
        }

        trackers.forEach((tracker) => {
            eventHandlers[tracker.action] =
                tracker.action in originalProps
                    ? function (e: React.SyntheticEvent) {
                        originalProps[tracker.action](e);
                        trackUserInteraction(e, tracker);
                    }
                    : function (e: React.SyntheticEvent) {
                        trackUserInteraction(e, tracker);
                    }
        });

        return <Component
            {...originalProps}
            {...eventHandlers} />;
    }
}

function getValueFromNode(e: React.SyntheticEvent) {
    if (e.target.nodeName === 'INPUT') {
        const currentTarget = e.target as HTMLInputElement;
        return currentTarget.value;
    }
}
