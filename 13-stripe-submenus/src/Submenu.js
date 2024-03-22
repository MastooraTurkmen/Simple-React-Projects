import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenu, location, page: { page, links } } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.top = `${bottom}px`;
    submenu.style.left = `${center}px`;
  }, [location])

  return (
    <aside ref={container} className={`${isSubmenu ? 'submenu show' : 'submenu'}`}>
      <h4>{page}</h4>
      <div className={`submenu-center col-2`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
