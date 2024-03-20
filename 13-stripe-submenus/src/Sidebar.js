import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'


const Sidebar = () => {
  const { isSidebar, closeSidebar } = useGlobalContext()

  return (
    <aside className={`${isSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
