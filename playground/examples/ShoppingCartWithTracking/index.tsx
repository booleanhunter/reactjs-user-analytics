import React, { useState } from 'react';

import ReactJsonView from '@microlink/react-json-view';

import ShoppingCart from '@components/templates/ShoppingCart';
import SplitLayout from '@components/Layout/SplitLayout';

import withTracking,
{
    DataContext,
    UserInteraction,
    UserInteractionResource
} from 'react-user-analytics/index';

const data = {
    context: 'Shopping page',
    app: {
        version: '1',
    },
} as UserInteraction.DataContext;

export const ShoppingCartInteractionLogger = () => {
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
                <ShoppingCart onEventLog={handleLogEvent} />
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

export default ShoppingCartInteractionLogger;
