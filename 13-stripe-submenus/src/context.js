import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvidor = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [isModalbar, setIsModal] = useState(false);

    const openSidebar = () => {
        setIsSidebar(true)
    }
    const closeSidebar = () => {
        setIsSidebar(false)
    }

    const openModal = () => {
        setIsModal(true)
    }
    const closeModal = () => {
        setIsModal(false)
    }

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}


export { AppProvidor }