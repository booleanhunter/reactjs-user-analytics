import React from 'react';
import './Index.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    context?: any;
};

const Button: React.FC<ButtonProps> = (
    props: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
) => {
    const { label, ...rest } = props

    return (
        <button
            className="custom-button"
            data-element-type="component"
            data-display-name="Button"
            {...rest}
        >
            {label}
        </button>
    )
}

export default Button;
