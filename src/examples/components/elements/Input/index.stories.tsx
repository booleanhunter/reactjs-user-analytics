import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import Input, { InputProps } from './index';

export default {
    title: 'Components/Elements/Input',
    component: Input,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: [
                    "small",
                    "default",
                    "large",
                ],
            },
        },
    },
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
    value: "",
    placeholder: "I am a placeholder",
    size: "default" as InputProps["size"],
};