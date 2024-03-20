import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvidor = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSubmenu, setIsSubmenu] = useState(false);

    const openSidebar = () => {
        setIsSidebar(true)
    }
    const closeSidebar = () => {
        setIsSidebar(false)
    }

    const openSubmenu = () => {
        setIsSubmenu(true)
    }
    const closeSubmenu = () => {
        setIsSubmenu(false)
    }

    return (
        <AppContext.Provider value={{
            isSidebar,
            isSubmenu,
            openSidebar,
            openSubmenu,
            closeSubmenu,
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    useContext(AppContext)
}

export { AppProvidor, useGlobalContext }