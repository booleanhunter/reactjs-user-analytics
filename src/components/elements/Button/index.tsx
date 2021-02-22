import { useState, useEffect } from 'react';
import {
    Button as AntButton,
    ButtonProps as AntButtonProps,
} from 'antd';

import 'antd/lib/button/style/css';

export interface ButtonProps extends AntButtonProps {
    label: string;
}

function Button(props: ButtonProps) {
    const {label, ...rest} = props;

    return (
        <AntButton
            {...rest}
        >
            {props.label}
        </AntButton>
    )
}

export default Button;