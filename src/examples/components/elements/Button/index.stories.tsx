import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './index';

export default {
    title: 'Components/Elements/Button',
    component: Button,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: [
                    "default",
                    "primary",
                    "ghost",
                    "dashed",
                ],
            },
        },
    },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    type: "primary" as ButtonProps["type"],
    label: "I am a button",
};

export const Ghost = Template.bind({});

Ghost.args = {
    type: "ghost",
    label: "I am a ghost button"
};