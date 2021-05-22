
import {
    Menu as AntMenu,
    MenuItemProps as AntMenuItemProps,
} from 'antd';

import 'antd/lib/menu/style/css';

import {
    withTracking,
} from 'library/react/components/withTracking';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface MenuItemProps extends Omit<AntMenuItemProps, "onClick"> {
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function MenuItem(props: MenuItemProps) {
    const handleClick: AntMenuItemProps["onClick"] = (info) => {
        props.onClick && props.onClick(info.domEvent);
    }

    return (
        <AntMenu.Item
            {...props}
            onClick={handleClick}
        >
            {props.children}
        </AntMenu.Item>
    )
}

export default MenuItem;

export const MenuItemWithTracking = withTracking(MenuItem);