import { ReactNode, HTMLAttributes } from 'react';
import './Header.css';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    title?: ReactNode;
    subTitle?: ReactNode;
    children?: ReactNode;
}

function Header(props: HeaderProps) {
    const { title, subTitle, children, ...rest } = props

    return (
        <div
            className={`custom-page-header`}
            data-element-type="component"
            data-display-name="Header"
            {...rest}
        >
            <div className="custom-page-header-heading">
                <div className="custom-page-header-title">
                    {title && <h1>{title}</h1>}
                    {subTitle && (
                        <div className="custom-page-header-subtitle">
                            {subTitle}
                        </div>
                    )}
                </div>
                {children && (
                    <div className="custom-page-header-children">
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;
