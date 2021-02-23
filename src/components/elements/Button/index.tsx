import { useState, useEffect } from 'react';
import {
    Button as AntButton,
    ButtonProps as AntButtonProps,
} from 'antd';

import 'antd/lib/button/style/css';

import { withDataContext } from '../../contexts/withDataContext';

interface ButtonStateProps extends AntButtonProps {
    label: string;
    context?: any;
}

export interface ButtonActionProps {
    customCallback?: (data: any) => void;
}

export type ButtonProps = ButtonStateProps & ButtonActionProps

function Button(props: ButtonProps) {
    const { label, context, onClick, customCallback, ...rest } = props;

    function handleClick(e: React.MouseEvent) {
        customCallback && customCallback(context);
    }

    return (
        <AntButton
            {...rest}
            onClick={handleClick}
        >
            {props.label}
        </AntButton>
    )
}

export default Button;

export const ButtonWithContext = withDataContext(Button)