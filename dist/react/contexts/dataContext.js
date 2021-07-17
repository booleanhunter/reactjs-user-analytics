import { createContext } from 'react';
/**
 * Default value for the `DataContext` object
 *
 */
export var data = {
    app: {
        version: "0.0",
    },
    context: ""
};
/**
 * - Context object to be used by `<DataContext.Provider>` & `useContext` hook
 *
 */
export var DataContext = createContext(data);
