import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenu, location } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.top = `${bottom}px`;
    submenu.style.left = `${center}px`;
  }, [location])

  return (
    <aside ref={container} className={`${isSubmenu ? 'submenu show' : 'submenu'}`}>
      submenu
    </aside>
  )
}

export default Submenu
