import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

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
          <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
            <ul className="links">
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
