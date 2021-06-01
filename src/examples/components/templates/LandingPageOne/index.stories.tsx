import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';
import MenuItem from '../../elements/Menu/MenuItem';

import LandingPage, { LandingPageProps } from './index';
import logo from './static/logo.png';

export default {
    title: 'Components/Templates/Landing Page',
    component: LandingPage,
    argTypes: {
        mode: {
            control: {
                type: 'select',
                options: [
                    "horizontal",
                    "vertical",
                    "vertical-left",
                    "vertical-right", 
                    "inline",
                ],
            },
        },
        theme: {
            control: {
                type: 'select',
                options: [
                    "light",
                    "dark",
                ],
            },
        },
        items: {
            control: {
                type: 'array',
            },
        },
        defaultSelectedKeys: {
            control: {
                type: 'array',
            }
        }
    },
};

const Template: Story<any> = (args) => {
    const { items} = args;
    return (
    <LandingPage {...args}>
        
        { 
            items.map((item: string, i: any) => {
                return (
                <MenuItem key={`${i}`}>{item}</MenuItem>
            )})
        }
     
    </LandingPage>
)};

export const Default = Template.bind({});

Default.args = {
    items: ["Landing 1", "Landing 2", "Landing 3"],
    theme: "dark",
    style:{ lineHeight: '64px' },
    mode: 'horizontal',
    logo: logo,
};