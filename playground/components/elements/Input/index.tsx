import React, { InputHTMLAttributes } from 'react';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {};

const Input: React.FC<InputProps> = (
    props: InputProps,
    ref: React.Ref<HTMLInputElement>,
) => {

    return (
        <input
            ref={ref}
            data-element-type="component"
            data-display-name="Input"
            className={`custom-input`}
            {...props}
        />
    )
};

export default Input;
