import React, { createContext } from 'react';
import { UserInteraction } from '../../resources/userInteractionResource';

const data : UserInteraction.DataContext = {
    app: {
        version: "0.0",
    },
    context: ""
};

export const DataContext = createContext(data);