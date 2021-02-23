import { useState, useEffect, createContext } from 'react';
import { DataContext } from '../../contexts/withDataContext';
import Button, {ButtonWithContext} from '../../elements/Button';

import Input from '../../elements/Input';

import Card from '../../widgets/Card';

export interface LoginFormProps {

}

const data = {
    page: "Login page",
    company: "My company",
}

function LoginForm(props: LoginFormProps) {
    function getContext (data: any) {
        // console.log(data);
    }

    return (
        <DataContext.Provider value={data}>
            <Card
                title="Login"
                actions={[
                    <ButtonWithContext
                        type="primary"
                        label="Login"
                        customCallback={getContext}
                    />,
                    <Button
                        type="ghost"
                        label="Sign Up"
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