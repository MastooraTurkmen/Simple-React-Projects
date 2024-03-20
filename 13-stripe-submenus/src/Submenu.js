import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenu } = useGlobalContext();

  return (
    <aside className={`${isSubmenu ? 'submenu show' : 'submenu'}`}>
      submenu
    </aside>
  )
}

export default Submenu
