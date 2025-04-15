import { default as React } from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    context?: any;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
