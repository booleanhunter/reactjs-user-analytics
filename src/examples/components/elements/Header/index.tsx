import { useState, useEffect } from 'react';
import { PageHeader, PageHeaderProps } from 'antd';

import 'antd/lib/page-header/style/css';

export interface HeaderProps extends PageHeaderProps {

}

function Header(props: HeaderProps) {

    return (
        <PageHeader
            {...props}
        />
    );
}

export default Header;