import React, { useState } from 'react';
import withTracking, { UserInteractionResource } from 'react-user-analytics/index';

import ReactJsonView from '@microlink/react-json-view'

import EventRSVP from '@components/templates/EventRSVP';
import SplitLayout from '@components/Layout/SplitLayout';

const EventRSVPWithTracking = withTracking(EventRSVP);

export const EventRSVPInteractionLogger = () => {
    const [eventData, setEventData] = useState<UserInteractionResource[]>([])

    const handleLogEvent = (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource,
    ) => {
        setEventData((prev) => [...prev, interactionResource])
    }

    return (
        <SplitLayout>
            <>
                <EventRSVPWithTracking
                    label="click me"
                    trackers={[
                        {
                            action: 'onClick',
                            track: handleLogEvent,
                        },
                        {
                            action: 'onChange',
                            track: handleLogEvent,
                        },
                    ]}
                ></EventRSVPWithTracking>
            
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
    )
}

export default EventRSVPInteractionLogger;