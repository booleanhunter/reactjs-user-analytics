import React from 'react';
import { Object, UserInteraction } from '../../resources/userInteractionResource';
/**
 * Props required for the Tracking component
 */
export declare type TrackerProps = {
    dataContext?: UserInteraction.DataContext;
    origin?: string;
    trackers: UserInteraction.Tracker[];
} & Object<any>;
/**
 * HOC that returns the provided Component with UserInteraction tracking logic.
 */
export declare function withTracking(Component: React.ComponentType<any>): (props: TrackerProps) => JSX.Element;
//# sourceMappingURL=withTracking.d.ts.map