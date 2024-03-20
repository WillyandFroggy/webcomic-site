import { NavLink } from "@remix-run/react";

function MainNavigation() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/comics">Comics</NavLink>
        </li>
        <li>
            <a href="https://www.shopify.com/">Shopify</a>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;