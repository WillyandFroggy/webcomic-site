import { NavLink, Link, useLocation } from "@remix-run/react";
import { useState, useEffect, useRef } from 'react';
import { Image } from "@unpic/react";

function SiteHeader() {
  const [isActive, setIsActive] = useState(false);

  const checkboxRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = isActive;
    }
  }, [isActive]);
  
  useEffect(() => {
    setIsActive(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && labelRef.current && headerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !labelRef.current.contains(event.target as Node) &&
        !headerRef.current.contains(event.target as Node)  
        ) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header id="header" ref={headerRef}>
      <div className="logo"><Link to="/" prefetch="intent">
        <Image src="https://cdn.shopify.com/s/files/1/0671/9838/6420/files/Bright-Red-Comic-WF-Logo_69f14b0a-a0bd-4bc1-85f1-88c303be8cb9.png?v=1712324144"
          alt="Willy and Froggy Logo"
          width={90}
          height={40}
        />
       </Link>
      </div>
      <input type="checkbox" ref={checkboxRef} className="menu-button" id="openSidebarMenu" onChange={() => setIsActive(!isActive)} />
      <label ref={labelRef} htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <nav ref={menuRef} className={`menu ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/comics" prefetch="intent" onClick={() => setIsActive(!isActive)}>Comics</NavLink>
          </li>
          <li>
            <NavLink to="/about" prefetch="intent" onClick={() => setIsActive(!isActive)}>About</NavLink>
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