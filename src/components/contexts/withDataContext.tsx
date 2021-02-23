import React, { createContext } from 'react';

const data = {} as any;
export const DataContext = createContext(data);

export const withDataContext = <P extends object>(Component: React.ComponentType<P>) => {
    return function fn(props: P) {
        return (
            <DataContext.Consumer>
                {
                    (context) => <Component
                        {...props}
                        context={context}
                    />
                }
            </DataContext.Consumer>
        );
    };
};
