import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from './index';

export default {
    title: 'Components/Widgets/Modal',
    component: Modal,
};

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "I am a Modal",
    visible: true,
    centered: true,
    closable: true,
    okText: "OK",
    cancelText: "Cancel",
};
