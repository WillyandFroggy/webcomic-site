import type { LinksFunction } from "@remix-run/cloudflare";
// import { cssBundleHref } from "@remix-run/css-bundle";
import baseStyles from "~/styles/base.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import SiteHeader from "~/components/SiteHeader";
import Footer from "~/components/Footer";

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <SiteHeader />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
