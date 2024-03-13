import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }

  }, [showLinks])

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
              <FaBars />
            </button>
          </div>
          <div className='links-container' ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((item) => {
                const { id, url, text } = item;
                return <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((link) => {
              const { id, icon, url } = link;
              return (
                <div>
                  <li key={id}>
                    <a target='_blank' href={url}>{icon}</a>
                  </li>
                </div>
              )
            })}

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
