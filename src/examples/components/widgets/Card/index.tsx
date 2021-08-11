import { useState, useEffect } from 'react';
import { Card as AntCard, CardProps as AntCardProps} from 'antd';

import 'antd/lib/card/style/css';

export interface CardProps extends AntCardProps {

}

function Card(props: CardProps) {

    return (
        <AntCard
            data-element-type="component"
            data-display-name="Card"
            {...props}
        />
    );
}

export default Card;