import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className="nav-toggle">
              <FaBars />
            </button>
          </div>
          <div className="links-container show-container">
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
                <>
                  <li key={id}>
                    <a target='_blank' href={url}>{icon}</a>
                  </li>
                </>
              )
            })}

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
