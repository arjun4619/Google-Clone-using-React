import React, { createContext, useContext, useReducer } from "react";

//Preparing the Data to be passed(DATA LAYER)
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Hook which allows us to pull information from the DATA LAYER
export const useStateValue = () => useContext(StateContext)