import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import TrackingOnTopLevel from './index';

export default {
    title: 'Components/Pages/Tracking on top level',
    component: TrackingOnTopLevel,
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
        defaultSelectedKeys: {
            control: {
                type: 'array',
            }
        }
    },
};

const Template: Story<any> = (args) => {
    return (
        <TrackingOnTopLevel />
    )
};

export const Default = Template.bind({});

Default.args = {};