import { default as React } from 'react';
import { UserInteractionResource } from '../../../../../../../../../../../../src/index';
export interface NewsletterSignupProps {
    onEventLog: (e: React.MouseEvent<HTMLElement, MouseEvent>, interactionResource: UserInteractionResource) => void;
}
declare function NewsletterSignup({ onEventLog }: NewsletterSignupProps): any;
export default NewsletterSignup;
