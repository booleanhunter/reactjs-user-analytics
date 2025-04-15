import React, { HTMLAttributes } from 'react';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    title?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
};

const Card: React.FC<CardProps> = (
    props: CardProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const { title, children, className = '', ...rest } = props

    return (
        <div
            {...rest}
            className={`custom-card ${className}`}
            data-element-type="component"
            data-display-name="Card"
        >
            {title && (
                <div className="custom-card-header">
                    {title && <div className="custom-card-title">{title}</div>}
                </div>
            )}
            <div className="custom-card-body">{children}</div>
        </div>
    )
}

export default Card;
