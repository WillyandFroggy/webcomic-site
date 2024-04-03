import { NavLink, Link } from "@remix-run/react";
import { useState } from 'react';

function SiteHeader() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header id="header">
      <div className="logo"><Link to="/" prefetch="intent"><img src="/images/Bright-Red-Comic-WF-Logo.png" alt="Willy and Froggy Logo" /></Link></div>
      <input type="checkbox" className="menu-button" id="openSidebarMenu" onChange={() => setIsActive(!isActive)} />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <nav className={`menu ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/comics" prefetch="intent">Comics</NavLink>
          </li>
          <li>
            <NavLink to="/about" prefetch="intent">About</NavLink>
          </li>
          <li>
              <a href="https://shop.willyandfroggy.com/">Shop</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;