import BaseResource from './baseResource';
export declare type Object<T> = {
    [P in keyof T]: T[P];
};
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
        component: string;
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
        app: BaseResource["app"];
        context: UserInteractionResource["source"]["context"];
    }
    const TYPE = "UserInteraction";
    /**
     * Type of the event to be tracked. Must be a **valid** React Synthetic event.
     *
     */
    type Action = "onClick" | "onChange";
    /**
     * Type of the individual object in `trackers=Trackers[]` used as the prop in the Tracking component
     *
     */
    interface Tracker {
        action: Action;
        data?: UserInteractionResource["data"];
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
    function generateResource(app: BaseResource["app"], action: UserInteraction.Action, source: UserInteractionResource["source"], data: UserInteractionResource["data"]): UserInteractionResource;
}
export default UserInteractionResource;
//# sourceMappingURL=userInteractionResource.d.ts.map