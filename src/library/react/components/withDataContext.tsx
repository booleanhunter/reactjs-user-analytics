import { DataContext } from '../contexts/dataContext';

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
