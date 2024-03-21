import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const boundBtn = e.target.getBoundingClientRect()
    const center = (boundBtn.left + boundBtn.right) / 2;
    const bottom = boundBtn.bottom - 3;
    openSubmenu(page, { center, bottom })
  }

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className='nav-logo' />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">products</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">developers</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
