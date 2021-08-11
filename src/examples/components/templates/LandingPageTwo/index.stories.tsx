import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';
import MenuItem from '../../elements/Menu/MenuItem';

import LandingPageTwo, { LandingPageTwoProps } from './index';


export default {
    title: 'Components/Templates/Landing Page: Tracking only on top level',
    component: LandingPageTwo,
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
    const { items } = args;
    return (
    <LandingPageTwo {...args}>
        
        { 
            items.map((item: string, i: any) => {
                return (
                <MenuItem key={`${i}`}>{item}</MenuItem>
            )})
        }
     
    </LandingPageTwo>
)};

export const Default = Template.bind({});

Default.args = {
    items: ["Landing 1", "Landing 2", "Landing 3"],
};