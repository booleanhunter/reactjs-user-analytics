import { useState, useEffect } from 'react';
import { Modal as AntModal, ModalProps as AntModalProps} from 'antd';

import 'antd/lib/modal/style/css';

export interface ModalProps extends AntModalProps {

}

function Modal(props: ModalProps) {

    return (
        <AntModal
            {...props}
        />
    );
}

export default Modal;