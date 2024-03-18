import React, { useState, useContext } from 'react'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={'hello worlddddd'}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }