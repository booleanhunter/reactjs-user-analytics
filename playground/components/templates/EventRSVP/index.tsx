import React from 'react';
import './index.css';

import Card from '@components/elements/Card';
import Button from '@components/elements/Button';
import Input from '@components/elements/Input';
import Header from '@components/elements/Header';

import {
    workerInstance,
    initializeBeacon
} from 'react-user-analytics/index';


// const worker = workerInstance.getInstance();

// worker.start({
//     resourceLimit: 5,
//     ttl: 7000,
//     apiUrl: 'http://localhost:3000/events',
//     dataKey: "events"
// });

initializeBeacon('events', 'http://localhost:3000/events');

export interface LandingPageProps extends React.HTMLAttributes<HTMLElement> {}

function EventRSVP(props: LandingPageProps) {

    return (
        <div className="layout" {...props}>
            <Header
                title={'RSVP for Our Event'}
                subTitle={
                    // "We’d love to see you at our upcoming event. Reserve your spot now!'"
                    'An example of a template that only has tracking on the outer layer'
                }
            ></Header>

            <main className="landing-content">
                <h1 className="landing-title">
                    We'd love to see you at our upcoming event. 
                </h1>

                <Card className="newsletter">
                    <h2 className="newsletter-title">Reserve your spot</h2>
                    <div className="newsletter-input-group">
                        <Input
                            type="text"
                            placeholder="Type your email"
                            origin="Email Input"
                        />
                        <Button
                            label="RSVP"
                        />
                    </div>
                </Card>
            </main>
        </div>
    );
}

export default EventRSVP;
