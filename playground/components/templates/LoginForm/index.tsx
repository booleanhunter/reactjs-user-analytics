import React from 'react';
import UserInteractionResource, {
    UserInteraction,
} from 'react-user-analytics/resources/userInteractionResource'
import { DataContext } from 'react-user-analytics/react/contexts/dataContext'

import Button from '@components/elements/Button'
import Input from '@components/elements/Input'
import Card from '@components/elements/Card'
import withTracking from 'react-user-analytics/index';

const ButtonWithTracking = withTracking(Button);
const InputWithTracking = withTracking(Input);

export interface LoginFormProps {}

const data = {
    context: 'Login Page',
    app: {
        version: '1',
    },
} as UserInteraction.DataContext

function LoginForm(props: LoginFormProps) {
    function verifyUsernameAndPassword(
        e: React.MouseEvent<HTMLElement, MouseEvent>,
    ) {
        // app logic goes here
        console.log('verifyUsernameAndPassword')
    }

    function logEvent(
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource,
    ) {
        // tracking logic goes here
        console.log('logEvent')
        console.log(interactionResource)
        /*
            do whatever you want with the resource,
            like save it to IndexedDB, compress it, save it via API, etc
        */
    }

    return (
        <DataContext.Provider value={data}>
            <Card
                title="Login"
                actions={[
                    <ButtonWithTracking
                        type="primary"
                        label="Login"
                        onClick={verifyUsernameAndPassword}
                        trackers={[
                            {
                                action: 'onClick',
                                track: logEvent,

                                // pass optional custom data
                                data: {
                                    color: 'blue',
                                },
                            },
                        ]}
                        // optional props
                        origin="Login Button"
                        dataContext={{
                            app: {
                                version: '0',
                            },
                            context: 'Custom login page',
                        }}
                    />,
                    <Button
                        type="ghost"
                        label="Sign Up"
                        onClick={verifyUsernameAndPassword}
                    />,
                ]}
            >
                <InputWithTracking
                    type="text"
                    placeholder="email"
                    trackers={[
                        {
                            action: 'onClick',
                            track: logEvent,
                            data: {
                                customKey1: 'input',
                            },
                        },
                        {
                            action: 'onChange',
                            track: logEvent,
                            data: {
                                customKey1: 'input',
                            },
                        },
                    ]}
                    // optional props
                    origin="Login Page Email Input"
                    dataContext={{
                        app: {
                            version: '0',
                        },
                        context: 'Custom login page',
                    }}
                />
                <Input type="password" placeholder="password" />
            </Card>
        </DataContext.Provider>
    )
}

export default LoginForm
