import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
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

export const useGlobalContext = () => {
    return useContext(AppContext)
}
