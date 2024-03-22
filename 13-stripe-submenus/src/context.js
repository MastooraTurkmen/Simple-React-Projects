import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSubmenu, setIsSubmenu] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: '', links: [] })

    const openSidebar = () => {
        setIsSidebar(true)
    }
    const closeSidebar = () => {
        setIsSidebar(false)
    }

    const openSubmenu = (text, coordinator) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page)
        setIsSubmenu(true)
        setLocation(coordinator)
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
            closeSidebar,
            location,
            page
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
