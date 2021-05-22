import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from './index';
import MenuItem from './MenuItem';

export default {
    title: 'Components/Elements/Menu',
    component: Menu,
    argTypes: {
        mode: {
            control: {
                type: 'select',
                options: [
                    "horizontal",
                    "vertical",
                    "vertical-left",
                    "vertical-right",
                    "inline"
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
        },
    },
};

const Template: Story<MenuProps> = (args) => (
    <Menu {...args}>
        <MenuItem>
        Link 11
        </MenuItem>
        <MenuItem>
        Link 22
        </MenuItem>
    </Menu>
)

export const HorizontalMenu = Template.bind({});

HorizontalMenu.args = {
    theme:"dark",
    mode:"horizontal",
    defaultSelectedKeys:['1'],
    style:{ 
        lineHeight: '64px' 
    },
};

// const TemplateOne: Story<any> = (args) => (<Menu>
//     <MenuItem>
//        Link 11
//     </MenuItem>
//     <MenuItem>
//        Link 22
//     </MenuItem>
// </Menu>)