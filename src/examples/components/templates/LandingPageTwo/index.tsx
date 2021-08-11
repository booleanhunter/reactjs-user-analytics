import { Layout } from 'antd';
import styled from 'styled-components';

import logo from './static/logo.png';

import NavBar, { NavbarProps } from '../../widgets/NavBar';
import Card from '../../widgets/Card';

import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Menu from '../../elements/Menu/MenuItem';

import {
    withTracking,
} from 'library/react/components/withTracking';

const { Content } = Layout;

export interface LandingPageTwoProps {
    items: string[];
}

function LandingPageTwo(props: LandingPageTwoProps) {

    function handleNavbarClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        // app logic goes here
        console.log("navbar link has been clicked with this Item", e);
    }

    function verifyEmail(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        // app logic goes here
        console.log("verifyEmail");
    }

    const headerStyle = {
        textAlign: "center" as "center"
    };

    const mode = "horizontal";
    const theme = "dark";

    const { items, ...rest } = props;
    const menuItems = items.map((item, k) => {
        return (
            <Menu
                key={k}
                onClick={handleNavbarClick}
            >
                {item}
            </Menu>
        )
    });

    return (
        <Layout className="layout"
            data-element-type="component"
            data-display-name="LandingPageTwo"
            {...rest}
        >
            <NavBar
                mode={mode}
                theme={theme}
                logo={logo}
            >
                {menuItems}
            </NavBar>
            <StyledContent>
                <div style={headerStyle}>
                    <h1>An example of a template that only has tracking on the outer layer</h1>
                </div>
            </StyledContent>
            <NewsLetter
                title="Newsletter"
                actions={[
                    <Button
                        type="primary"
                        label="Subscribe"
                        onClick={verifyEmail}
                    />,
                ]}>

                <Input
                    type="text"
                    placeholder="Type your email"
                />
            </NewsLetter>
        </Layout>
        
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

export default LandingPageTwo;
export const LandingPageWithTracking = withTracking(LandingPageTwo);