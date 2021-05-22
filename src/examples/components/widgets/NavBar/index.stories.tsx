import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import NavBar from './index';
import MenuItem from '../../elements/Menu/MenuItem';
import logo from './static/logo.png';

export default {
    title: 'Components/Widgets/NavBar',
    component: NavBar,
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
    <NavBar {...args}>
        { 
            items.map((item: string, i: any) => {
                return (
                <MenuItem key={`${i}`}>{item}</MenuItem>
            )})
        }
    </NavBar>
)};

export const Default = Template.bind({});

Default.args = {
    title: "Result title",
    items: ["Link 100", "Link 200"],
    theme: "dark",
    style:{ lineHeight: '64px' },
    mode: 'horizontal',
    logo: logo,
};
