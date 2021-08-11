import { useState, useEffect } from 'react';
import { Result as AntResult, ResultProps as AntResultProps} from 'antd';

import 'antd/lib/result/style/css';

export interface ResultProps extends AntResultProps {

}

function Result(props: ResultProps) {

    return (
        <AntResult
            data-element-type="component"
            data-display-name="Result"
            {...props}
        />
    );
}

export default Result;