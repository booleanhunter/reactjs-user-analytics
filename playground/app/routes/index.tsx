/// <reference types="vite/client" />
import { createBrowserRouter } from 'react-router';

import HomePage from '@components/pages/HomePage';

import ButtonInteractionLogger from '@examples/ButtonWithTracking';
import InputInteractionLogger from '@examples/InputWithTracking';
import NewsletterSignupInteractionLogger from '@examples/NewsletterSignupWithTracking';
import EventRSVPInteractionLogger from '@examples/EventRSVPWithTracking';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: 'examples',
            children: [
                {
                    path: 'components',
                    children: [
                        {
                            path: 'button',
                            element: (
                                <ButtonInteractionLogger />
                            ),
                        },
                        {
                            path: 'input',
                            element: (
                                <InputInteractionLogger />
                            ),
                        },
                    ],
                },
                {
                    path: 'pages',
                    children: [
                        {
                            path: 'newsletter-signup',
                            element: <NewsletterSignupInteractionLogger />,
                        },
                        {
                            path: 'event-rsvp',
                            element: <EventRSVPInteractionLogger />,
                        },
                    ],
                },
            ]
        }
    ],
    {

        basename: import.meta.env.VITE_ENV === "development" ? '/' : '/reactjs-user-analytics/',
    }
);
