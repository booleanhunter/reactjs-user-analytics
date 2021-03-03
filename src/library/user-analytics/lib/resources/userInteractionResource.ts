import BaseResource from './baseResource';

import { getUserOS } from '../interaction-tracking/browser';

export type Object<T> = {
    [P in keyof T]: T[P]
};

export default interface UserInteractionResource extends BaseResource {
    type: typeof UserInteraction.TYPE;
    action: UserInteraction.Action;
    source: {
        context: string;
        origin: string;
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

export namespace UserInteraction {
    export interface DataContext {
        app: BaseResource["app"],
        context: UserInteractionResource["source"]["context"],
    }

    export const TYPE = "UserInteraction";

    export type Action =
    | "onClick";

    export interface Tracker {
        action: Action;
        data?: UserInteractionResource["data"];
        track: (e: any, interactionResource: UserInteractionResource) => void;
    }
    
    export function generateResource(
        app: BaseResource["app"],
        action: UserInteraction.Action,
        source: UserInteractionResource["source"],
        data: UserInteractionResource["data"],
    ) : UserInteractionResource {
        return {
            type: UserInteraction.TYPE,
            app,
            date: new Date(),
            browser: {
                name: navigator.appName,
                version: navigator.appVersion,
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                window: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            },
            os: getUserOS(),
            action,
            source,
            data,
        }
    }
}