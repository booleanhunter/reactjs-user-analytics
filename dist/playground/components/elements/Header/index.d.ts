import { ReactNode, HTMLAttributes } from 'react';
export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    title?: ReactNode;
    subTitle?: ReactNode;
    children?: ReactNode;
}
declare function Header(props: HeaderProps): any;
export default Header;
