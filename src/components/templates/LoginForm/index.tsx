import { DataContext } from '../../contexts/withDataContext';
import Button, { ButtonWithContext, ButtonWithTracking } from '../../elements/Button';

import Input from '../../elements/Input';

import Card from '../../widgets/Card';

export interface LoginFormProps {

}

const data = {
    page: "Login page",
    company: "My company",
}

function LoginForm(props: LoginFormProps) {

    function verifyUsernameAndPassword (e: React.MouseEvent<HTMLElement, MouseEvent>) {
        // app logic goes here
    }

    function logMouseEvent (event: React.MouseEvent<HTMLElement, MouseEvent>, data: any) {
        // tracking logic goes here
    }

    return (
        <DataContext.Provider value={data}>
            <Card
                title="Login"
                actions={[
                    <ButtonWithTracking
                        type="primary"
                        label="Login"
                        onClick={(e: any) => verifyUsernameAndPassword(e.value)}
                        trackers={[{
                            context: "Login and Signup",
                            type: "onClick",
                            callback: logMouseEvent,
                            data: {
                                element: "Login button",
                                ...data,
                            }
                        }]}
                    />,
                    <Button
                        type="ghost"
                        label="Sign Up"
                        onClick={verifyUsernameAndPassword}  
                    />
                ]}>
                <Input
                    type="text"
                    placeholder="email"
                />
                <Input
                    type="password"
                    placeholder="password"
                />
            </Card>
        </DataContext.Provider>
        
    )
}

export default LoginForm;