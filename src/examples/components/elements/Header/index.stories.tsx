import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import Header, { HeaderProps } from './index';

export default {
    title: 'Components/Elements/Header',
    component: Header,
};

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: "I am a Header",
    subTitle: "I am a subtitle",
};