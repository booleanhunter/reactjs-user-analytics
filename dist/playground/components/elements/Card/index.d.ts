import { default as React, HTMLAttributes } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    title?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}
declare const Card: React.FC<CardProps>;
export default Card;
