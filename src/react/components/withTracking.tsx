import React, { useContext } from 'react';

import { Object } from '../../resources/baseResource';
import { UserInteraction } from '../../resources/userInteractionResource';

import { DataContext } from '../contexts/dataContext';
import { trackUserInteraction } from '../event-handler';

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

        trackers.forEach((tracker) => {
            eventHandlers[tracker.action] =
                tracker.action in originalProps
                    ? function (e: React.SyntheticEvent) {
                        originalProps[tracker.action](e);
                        trackUserInteraction(e, Component, dataContext, tracker);
                    }
                    : function (e: React.SyntheticEvent) {
                        trackUserInteraction(e, Component, dataContext, tracker);
                    }
        });

        return <Component
            {...originalProps}
            {...eventHandlers} />;
    }
}
