import { Layout } from 'antd';
import 'antd/lib/layout/style/css';

import Menu, { MenuProps } from '../../elements/Menu';
import MenuItem, { MenuItemWithTracking, MenuItemProps } from '../../elements/Menu/MenuItem/index';

const { Header } = Layout;

export interface NavbarProps extends MenuProps {
    logo?: string;
}

function NavBar(props: NavbarProps) {
    const { logo, theme,  mode, defaultSelectedKeys, style } = props;

    const logoImage = logo ? <img src={logo} style={{ width: "20px" }}/> : null;
    return (   
        <Header>
            <div className="logo" style={{float: 'left'}}>
                {logoImage}
            </div>
            <Menu
                theme={theme}
                mode={mode}
                defaultSelectedKeys={defaultSelectedKeys}
                style={style}
            >
                {props.children}
            </Menu>
        </Header>   
    )
}

export default NavBar;