import { getUserOS } from '../browser/utils';
/**
 * Types, interfaces and methods used for the `UserInteractionResource` object
 *
 */
export var UserInteraction;
(function (UserInteraction) {
    UserInteraction.TYPE = "UserInteraction";
    /**
     * Returns a `UserInteractionResource` object
     *
     */
    function generateResource(app, action, source, data) {
        return {
            type: UserInteraction.TYPE,
            app: app,
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
            action: action,
            source: source,
            data: data,
        };
    }
    UserInteraction.generateResource = generateResource;
})(UserInteraction || (UserInteraction = {}));
