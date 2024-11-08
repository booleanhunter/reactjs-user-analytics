import { useState, useEffect } from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

import 'antd/lib/input/style/css';

import {
    withTracking,
} from 'library/react/components/withTracking';

export interface InputProps extends AntInputProps {
    
}

function Input(props: InputProps) {

    return (
        <AntInput
            data-element-type="component"
            data-display-name="Input"
            {...props}
        />
    );
}

export default Input;

export const InputWithTracking = withTracking(Input)