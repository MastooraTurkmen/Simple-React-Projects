import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
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
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">products</a>
              </li>
            </ul>
          </div>
          <ul className="social-icons">
            <li>
              <a target='_blank' href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a target='_blank' href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a target='_blank' href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
