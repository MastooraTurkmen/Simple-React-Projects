import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvidor = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [isModalbar, setIsModalbar] = useState(false);

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}


export { AppProvidor }