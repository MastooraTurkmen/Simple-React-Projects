import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {

  const { isSubmenu, location, page: { page, links } } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.top = `${bottom}px`;
    submenu.style.left = `${center}px`;

    if (links.length === 4) {
      setColumns('col-4')
    }

    if (links.length === 3) {
      setColumns('col-3')
    }

  }, [location]);

  return (
    <aside ref={container} className={`${isSubmenu ? 'submenu show' : 'submenu'}`}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
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
