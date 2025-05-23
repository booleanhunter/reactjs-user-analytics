import { default as BaseResource, Object } from './baseResource';
/**
 * Resource object returned by a `tracker`'s `track` function
 *
 */
export interface UserInteractionResource extends BaseResource {
    type: typeof UserInteraction.TYPE;
    action: UserInteraction.Action;
    source: {
        context: string;
        origin?: string;
        component: {
            currentTarget: string;
            target: string | null;
        };
        element: {
            currentTarget: string;
            target: string;
            innerHTML?: string;
            innerText?: string;
            value?: string;
        };
    };
    data?: Object<any>;
}
/**
 * Types, interfaces and methods used for the `UserInteractionResource` object
 *
 */
export declare namespace UserInteraction {
    interface DataContext {
        app: BaseResource['app'];
        session?: BaseResource['session'];
        context: UserInteractionResource['source']['context'];
    }
    const TYPE = "UserInteraction";
    /**
     * Type of the event to be tracked. Must be a **valid** React Synthetic event.
     *
     */
    type Action = 'onClick' | 'onMouseOver' | 'onMouseEnter' | 'onMouseLeave' | 'onChange' | 'onSubmit' | 'onReset' | 'onSelect' | 'onScroll';
    /**
     * Type of the individual object in `trackers=Trackers[]` used as the prop in the Tracking component
     *
     */
    interface Tracker {
        action: Action;
        data?: UserInteractionResource['data'];
        /**
         * Callback function that runs when the `action` occurs.
         *
         */
        track: (e: any, interactionResource: UserInteractionResource) => void;
    }
    /**
     * Returns a `UserInteractionResource` object
     *
     */
    function mapToResource(app: BaseResource['app'], action: UserInteraction.Action, source: UserInteractionResource['source'], data: UserInteractionResource['data']): UserInteractionResource;
}
export default UserInteractionResource;
