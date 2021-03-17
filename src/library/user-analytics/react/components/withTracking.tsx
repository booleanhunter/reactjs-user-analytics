import React, { useContext } from 'react';

import {
    Object,
    UserInteraction,
} from '../../lib/resources/userInteractionResource';

import { DataContext } from '../contexts/dataContext';

type TrackerProps = {
    dataContext?: UserInteraction.DataContext;
    origin?: string,
    trackers: UserInteraction.Tracker[]
} & Object<any>;

export function withTracking (
    Component: React.ComponentType<any>
) {
    return function Fn(props: TrackerProps) {
        let eventHandlers: Object<any> = {};
        const { trackers, origin, dataContext: dataContextFromProps, ...originalProps } = props;

        let dataContext = useContext(DataContext);

        if (dataContextFromProps) {
            dataContext = dataContextFromProps
        }

        function trackUserInteraction(
            e: React.SyntheticEvent,
            tracker: UserInteraction.Tracker,
        ) {
            const targetNode = e.target as HTMLElement;
            const value = getValueFromNode(e);
            const userInteractionResource = UserInteraction.generateResource(
                dataContext.app,
                tracker.action,
                {
                    context: dataContext.context,
                    ...(originalProps.origin && {
                        origin: originalProps.origin
                    }),
                    component: Component.displayName || Component.name,
                    element: {
                        currentTarget: e.currentTarget.nodeName,
                        target: targetNode.nodeName || e.currentTarget.nodeName,
                        innerHTML: targetNode.innerHTML,
                        innerText: targetNode.innerText,
                        ...(value && {
                            value,
                        }),
                    },
                },
                tracker.data,
            );

            tracker.track(e, userInteractionResource);
        }

        trackers.forEach(tracker => {
            eventHandlers[tracker.action] = (tracker.action in originalProps) ? function(e: React.SyntheticEvent) {
                originalProps[tracker.action](e);
                trackUserInteraction(e, tracker);
            } : function (e: React.SyntheticEvent) {
                trackUserInteraction(e, tracker);
            }
        })

        return (
            <Component
                { ...originalProps }
                { ...eventHandlers }
            />
        );
    };
};

function getValueFromNode(e: React.SyntheticEvent) {

    if (e.currentTarget.nodeName === "INPUT") {
        const currentTarget = e.target as HTMLInputElement;
        return currentTarget.value
    }
}

