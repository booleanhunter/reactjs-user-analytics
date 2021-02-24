export interface Tracker {
    context: string;
    type: keyof React.DOMAttributes<string>;
    data: Object<any>;
    callback: (e: any, data: Object<any>) => void;
}

type Object<T> = {
    [P in keyof T]: T[P]
};

type TrackerProps = {
    trackers: Tracker[]
} & Object<any>;

export function withTracking (
    Component: React.ComponentType<any>
) {
    return function fn(props: TrackerProps) {
        let eventObject: Object<any> = {};
        const { trackers, ...rest } = props;

        trackers.forEach(tracker => {
            eventObject[tracker.type] = (tracker.type in rest) ? function(e: any) {
                rest[tracker.type](e);
                tracker.callback(e, {
                    context: tracker.context,
                    type: tracker.type,
                    data: tracker.data
                });
            } : function (e: any) {
                    tracker.callback(e, {
                        context: tracker.context,
                        type: tracker.type,
                        data: tracker.data
                    });
                }
        })

        return (
            <Component
                { ...props }
                { ...eventObject }
            />
        );
    };
};
