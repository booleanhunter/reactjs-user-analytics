import React from 'react';
import './index.css';

import Button from '@components/elements/Button';
import Input from '@components/elements/Input';
import Header from '@components/elements/Header';
import Card from '@components/elements/Card';

import withTracking,
{ 
    UserInteractionResource,
    workerInstance,
    initializeBeacon,
} from 'react-user-analytics/index';

const ButtonWithTracking = withTracking(Button);
const InputWithTracking = withTracking(Input);

// const worker = workerInstance.getInstance();

// worker.start({
//     resourceLimit: 5,
//     ttl: 7000,
//     apiUrl: 'http://localhost:3000/events',
//     dataKey: "events"
// });

initializeBeacon('events', 'http://localhost:3000/events')

export interface NewsletterSignupProps {
    onEventLog: (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource,
    ) => void;
}

function NewsletterSignup({onEventLog}: NewsletterSignupProps) {
    function verifyEmail(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        console.log('verifyEmail')
    }

    return (
        <div className="layout">
            <Header
                title={'Newsletter signup'}
                subTitle={
                    'A sample Newsletter signup page that uses tracking-enabled input-box and submit button'
                }
            ></Header>

            <main className="landing-content">
                <h1 className="landing-title">
                    Get our perspectives in your inbox.
                </h1>

                <Card className="newsletter">
                    <h2 className="newsletter-title">Newsletter</h2>
                    <div className="newsletter-input-group">
                        <InputWithTracking
                            type="text"
                            placeholder="Type your email"
                            trackers={[
                                {
                                    action: 'onClick',
                                    track: onEventLog,
                                    data: { customKey1: 'input onClick' },
                                },
                                {
                                    action: 'onChange',
                                    track: onEventLog,
                                    data: { customKey1: 'input onChange' },
                                },
                            ]}
                            origin="Email Input"
                        />
                        <ButtonWithTracking
                            label="Subscribe"
                            onClick={verifyEmail}
                            trackers={[
                                {
                                    action: 'onClick',
                                    track: onEventLog,
                                    data: { color: 'blue' },
                                },
                            ]}
                            origin="Landing Page"
                            dataContext={{
                                app: { version: '0' },
                                context: 'Custom Landing page',
                            }}
                        />
                    </div>
                </Card>
            </main>
        </div>
    );
}

export default NewsletterSignup;
