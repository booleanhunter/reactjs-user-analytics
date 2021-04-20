import { Layout, Menu } from 'antd';
import styled from 'styled-components';

import NavBar, { NavbarProps } from '../../widgets/NavBar';
import Card from '../../widgets/Card';

import UserInteractionResource, { UserInteraction } from '../../../library/user-analytics/lib/resources/userInteractionResource';
import { DataContext } from '../../../library/user-analytics/react/contexts/dataContext';

import { ButtonWithTracking } from '../../elements/Button';
import { InputWithTracking } from '../../elements/Input';
import { MenuItemWithTracking } from '../../elements/Menu/MenuItem';

import { StorageClient } from '../../../library/user-analytics/lib/data-processing/storage';
const { Content } = Layout;


export interface LandingPageProps extends NavbarProps {
    items: string[];
}

const storage = StorageClient.init({
    resourceLimit: 3,
    apiUrl: 'http://localhost:3000/events',
});

const data = {
    context: "Landing Page",
    app: {
        version: "1",
    },
} as UserInteraction.DataContext;


function LandingPage(props: LandingPageProps) {

    function handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        // app logic goes here
        console.log("navbar link has been clicked with this Item", e);
    }

    function verifyEmail(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        // app logic goes here
        console.log("verifyEmail");
    }

    function logEvent(
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource
    ) {
        // tracking logic goes here
        console.log("logEvent");
        console.log(interactionResource);

        /*
            do whatever you want with the resource,
            like save it to IndexedDB, compress it, save it via API, etc
        */

        storage.handle(event, interactionResource);
    }

    const headerStyle = {
        textAlign: "center" as "center"
    };

    const { mode, theme, items, style, logo } = props;
    const menuItems = items.map((item, k) => {
        return (
            <MenuItemWithTracking
                trackers={[
                    {
                        action: "onClick",
                        track: storage.handle,

                    }
                ]}
                origin="NavBar Header"
                key={k}
                name={item}
                onClick={handleClick}
            >
                {item}
            </MenuItemWithTracking>
        )
    });

    return (
        <DataContext.Provider value={data}>
            <Layout className="layout">
                <NavBar
                    mode={mode}
                    theme={theme}
                    style={style}
                    logo={logo}
                >
                    {menuItems}
                </NavBar>
                <StyledContent>
                    <div style={headerStyle}>
                        <h1>Let us help solve your critical website development challenges.</h1>
                    </div>
                </StyledContent>
                <NewsLetter
                    title="Newsletter"
                    actions={[
                        <ButtonWithTracking
                            type="primary"
                            label="Subscribe"
                            onClick={verifyEmail}

                            trackers={[{
                                action: "onClick",
                                track: logEvent,

                                // pass optional custom data
                                data: {
                                    color: "blue",
                                }
                            }]}

                            // optional props
                            origin="Landing Page"
                            dataContext={{
                                app: {
                                    version: "0",
                                },
                                context: "Custom Landing page"
                            }}
                        />,
                    ]}>

                    <InputWithTracking
                        type="text"
                        placeholder="Type your email"

                        trackers={
                            [
                                {
                                    action: "onClick",
                                    track: logEvent,
                                    data: {
                                        customKey1: "input onClick",
                                    }
                                }, {
                                    action: "onChange",
                                    track: logEvent,
                                    data: {
                                        customKey1: "input onChange",
                                    },
                                }
                            ]
                        }

                        // optional props
                        origin="Email Input"
                    />
                </NewsLetter>
            </Layout>
        </DataContext.Provider>
    )
}

const NewsLetter = styled(Card)`
    position: absolute;
    width: 100%;
    bottom: 0;
`
const StyledContent = styled(Content)`
    min-height: calc(100vh - 300px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    font-size: large;
`

export default LandingPage;
