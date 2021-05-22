export default interface BaseResource {
    app: {
        version: string,
    };
    date: Date;
    browser: {
        name: string,
        version: string,
        userAgent: string,
        platform: string,
        window: {
            width: number,
            height: number,
        }
    };
    os: {
        name: string,
        version: string,
    };
}