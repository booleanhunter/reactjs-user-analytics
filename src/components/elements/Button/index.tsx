import { useState, useEffect } from 'react';
import {
    Button as AntButton,
    ButtonProps as AntButtonProps,
} from 'antd';

import 'antd/lib/button/style/css';

import {
    withTracking,
} from '../../../library/user-analytics/react/components/withTracking';

interface ButtonStateProps extends AntButtonProps {
    label: string;
    context?: any;
}

export interface ButtonActionProps {
    
}

export type ButtonProps = ButtonStateProps & ButtonActionProps

function Button(props: ButtonProps) {
    const { label, onClick, ...rest } = props;

    return (
        <AntButton
            {...rest}
            onClick={onClick}
        >
            {props.label}
        </AntButton>
    )
}

export default Button;

export const ButtonWithTracking = withTracking(Button);