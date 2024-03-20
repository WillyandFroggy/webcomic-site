import type { LinksFunction } from "@remix-run/cloudflare";
// import { cssBundleHref } from "@remix-run/css-bundle";
import baseStyles from "~/styles/base.css";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import MainNavigation from "./components/MainNavigation";
import Footer from "./components/Footer";

export const links: LinksFunction = () => [
//  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
{ rel: "stylesheet", href: baseStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <div className="logo"><Link to="/">Willy + Froggy</Link></div>
          <input type="checkbox" className="menu-button" id="openSidebarMenu" />
          <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </label>
          <MainNavigation />
        </header>
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
