import React, { useContext } from 'react';

import {
    Object,
    UserInteraction,
} from '../../lib/resources/userInteractionResource';

import { DataContext } from '../contexts/dataContext';

type TrackerProps = {
    context?: string,
    origin?: string,
    trackers: UserInteraction.Tracker[]
} & Object<any>;

export function withTracking (
    Component: React.ComponentType<any>
) {
    return function Fn(props: TrackerProps) {
        let eventHandlers: Object<any> = {};
        const { trackers, ...originalProps } = props;

        const dataContext = useContext(DataContext);
        const context = props.context ? props.context : dataContext.context;

        function trackUserInteraction(
            e: React.SyntheticEvent,
            tracker: UserInteraction.Tracker,
        ) {
            const targetNode = e.target as HTMLElement;
            const userInteractionResource = UserInteraction.generateResource(
                dataContext.app,
                tracker.action,
                {
                    context,
                    origin: originalProps.origin || "",
                    component: Component.displayName || Component.name,
                    element: {
                        currentTarget: e.currentTarget.nodeName,
                        target: targetNode.nodeName || e.currentTarget.nodeName,
                        innerHTML: targetNode.innerHTML,
                        innerText: targetNode.innerText,
                        value: "",
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
                { ...props }
                { ...eventHandlers }
            />
        );
    };
};
