import { useState, useEffect } from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

import 'antd/lib/input/style/css';

export interface InputProps extends AntInputProps {

}

function Input(props: InputProps) {

    return (
        <AntInput
            {...props}
        />
    );
}

export default Input;