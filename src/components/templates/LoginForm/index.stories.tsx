import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import LoginForm, { LoginFormProps } from './index';

export default {
    title: 'Components/Templates/Login Form',
    component: LoginForm,
    // argTypes: {
    //     type: {
    //         control: {
    //             type: 'select',
    //             options: [
    //                 "default",
    //                 "primary",
    //                 "ghost",
    //                 "dashed",
    //             ],
    //         },
    //     },
    // },
};

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});