import { default as React } from 'react';
import { UserInteractionResource } from '../../../../../../../../../../../../src/index';
export interface ShoppingCartProps {
    onEventLog: (e: React.MouseEvent<HTMLElement, MouseEvent>, interactionResource: UserInteractionResource) => void;
}
declare const ShoppingCart: React.FC;
export default ShoppingCart;
