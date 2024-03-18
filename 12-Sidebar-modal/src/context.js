import React, { useState, useContext } from 'react'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={'hello worlddddd'}>
            {children}
        </AppContext.Provider>
    )
}


export default { AppContext, AppProvider }