import React, { useState } from 'react';

import ReactJsonView from '@microlink/react-json-view';

import NewsletterSignup from '@components/templates/NewsletterSignup';
import SplitLayout from '@components/Layout/SplitLayout';

import withTracking,
{
    DataContext,
    UserInteraction,
    UserInteractionResource
} from 'react-user-analytics/index';

const data = {
    context: 'Landing Page',
    app: {
        version: '1',
    },
} as UserInteraction.DataContext;

export const NewsletterSignupInteractionLogger = () => {
    const [eventData, setEventData] = useState<UserInteractionResource[]>([]);

    const handleLogEvent = (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource,
    ) => {
        setEventData((prev) => [...prev, interactionResource]);
    }

    return (
        <SplitLayout>

            <DataContext.Provider value={data}>
                <NewsletterSignup onEventLog={handleLogEvent} />
            </DataContext.Provider>

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

export default NewsletterSignupInteractionLogger;
