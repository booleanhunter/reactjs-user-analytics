import { Menu as AntMenu, MenuProps as AntMenuProps } from 'antd';

import 'antd/lib/menu/style/css';


export interface MenuProps extends AntMenuProps {
    
}

function Menu(props: MenuProps) {
    const { theme, mode, defaultSelectedKeys, style } = props;

    const onItemHover = (data: any) => {
        console.log("item has been clicked", data)
    }
   
    return (
        <AntMenu
            theme={theme}
            mode={mode}
            defaultSelectedKeys={defaultSelectedKeys}
            style={style}
        >
            { props.children }

        </AntMenu>
    );
}

export default Menu;
