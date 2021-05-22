import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import Card, { CardProps } from './index';

export default {
    title: 'Components/Widgets/Card',
    component: Card,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: [
                    "default",
                    "small",
                ],
            },
        },
    },
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
    type: "default" as CardProps["type"],
    title: "I am a card",
    bordered: true,
    hoverable: true,
};
