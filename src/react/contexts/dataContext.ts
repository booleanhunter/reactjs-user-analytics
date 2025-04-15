import React, { createContext } from 'react';
import { UserInteraction } from '../../resources/userInteractionResource';

/**
 * Default value for the `DataContext` object
 *
 */
export const data: UserInteraction.DataContext = {
    app: {
        version: '0.0',
    },
    context: '',
}

/**
 * - Context object to be used by `<DataContext.Provider>` & `useContext` hook
 *
 */
export const DataContext = createContext(data);
