import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import Result, { ResultProps } from './index';

export default {
    title: 'Components/Widgets/Result',
    component: Result,
    argTypes: {
        status: {
            control: {
                type: 'select',
                options: [
                    "success",
                    "error",
                    "info",
                    "warning",
                    "404",
                    "403",
                    "500"
                ],
            },
        },
    },
};

const Template: Story<ResultProps> = (args) => <Result {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "Result title",
    subTitle: "Result subtitle",
    status: "success",
};
