import React, { useState } from 'react';
import ReactJsonView from '@microlink/react-json-view';

import withTracking,
{ 
    UserInteractionResource,
} from 'react-user-analytics/index';

import Input from '@components/elements/Input';
import SplitLayout from '@components/Layout/SplitLayout';

const InputWithTracking = withTracking(Input);

export const InputInteractionLogger = () => {
    const [eventData, setEventData] = useState<UserInteractionResource[]>([]);

    const handleLogEvent = (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource,
    ) => {
        setEventData((prev) => [...prev, interactionResource]);
    };

    return (
        <SplitLayout>
            <InputWithTracking
                type="text"
                placeholder="Type your email"
                trackers={[
                    {
                        action: 'onClick',
                        track: handleLogEvent,
                        data: {
                            customKey1: 'input onClick',
                        },
                    },
                    {
                        action: 'onChange',
                        track: handleLogEvent,
                        data: {
                            customKey1: 'input onChange',
                        },
                    },
                ]}
                // optional props
                origin="Email Input"
            />
            <ReactJsonView
                src={
                    eventData.length
                        ? eventData
                        : { note: 'Waiting for events...' }
                }
                collapsed={false}
            />
        </SplitLayout>
    );
}

export default InputInteractionLogger;
