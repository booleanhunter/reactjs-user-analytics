/**
 * Properties common across any type of user-analytics resource object.
 * Information required for any kind of event tracking throughout the app.
 *
 */
export interface BaseResource {
    app: {
        version: string;
    };
    session?: Object<any>;
    date: Date;
    browser: {
        name: string;
        version: string;
        userAgent: string;
        platform: string;
        window: {
            width: number;
            height: number;
        };
    };
    os: {
        name: string;
        version: string;
    };
}
export declare type Object<T> = {
    [P in keyof T]: T[P];
};
export default BaseResource;
//# sourceMappingURL=baseResource.d.ts.map