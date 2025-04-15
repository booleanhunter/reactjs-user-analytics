import React, { useState } from 'react';

import ReactJsonView from '@microlink/react-json-view'

import Button from '@components/elements/Button';
import SplitLayout from '@components/Layout/SplitLayout';

import withTracking,
{ 
    UserInteractionResource,
} from 'react-user-analytics/index';

const ButtonWithTracking = withTracking(Button);

export const ButtonInteractionLogger = () => {
    const [eventData, setEventData] = useState<UserInteractionResource[]>([]);

    const handleLogEvent = (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource,
    ) => {
        setEventData((prev) => [...prev, interactionResource]);
    };

    return (
        <SplitLayout>
            <>
            {CodeBlock()}
                <ButtonWithTracking
                    label="click me"
                    trackers={[
                        // track onClick event
                        {
                            action: 'onClick', // event to track
                            track: handleLogEvent, // callback function that runs whenever the event occurs
                        },
                    ]}
                ></ButtonWithTracking>
            
            </>
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

export default ButtonInteractionLogger;

const CodeBlock = () => {
    const jsxCode = `
    const ButtonWithTracking = withTracking(Button);

<ButtonWithTracking
    label="click me"
    trackers={[
        {
            action: 'onClick',
            track: handleLogEvent,
        },
    ]}
/>
  `.trim();
  
    return (
        <pre className="custom-code-block">
            <code>{jsxCode}</code>
        </pre>
    );
}
