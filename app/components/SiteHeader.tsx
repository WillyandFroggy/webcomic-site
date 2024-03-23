import { NavLink, Link } from "@remix-run/react";
import { useState } from 'react';

function SiteHeader() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <div className="logo"><Link to="/">Willy + Froggy</Link></div>
      <input type="checkbox" className="menu-button" id="openSidebarMenu" onChange={() => setIsActive(!isActive)} />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <nav className={`menu ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/comics">Comics</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
              <a href="https://www.shopify.com/">Shop</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;