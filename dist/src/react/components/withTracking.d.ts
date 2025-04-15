import { default as React } from 'react';
import { Object } from '../../resources/baseResource';
import { UserInteraction } from '../../resources/userInteractionResource';
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
export declare function withTracking(Component: React.ComponentType<any>): (props: TrackerProps) => any;
