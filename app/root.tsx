import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
// import { cssBundleHref } from "@remix-run/css-bundle";
import baseStyles from "~/styles/base.css";
import basicPageStyles from "~/styles/page.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export const links: LinksFunction = () => [
  //  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: baseStyles },
  { rel: "stylesheet", href: basicPageStyles },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
    rel: "stylesheet",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Willy + Froggy" },
    {
      name: "description",
      content:
        "Comics about a whale and a frog who go on adventures. These comics are made by Amari &#268;ertkus and published by Voyager Golden Comics.",
    },
    { name: "og:url", content: "https://willyandfroggy.com/" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: "Willy + Froggy" },
    {
      name: "og:description",
      content:
        "Comics about a whale and a frog who go on adventures. These comics are made by Amari &#268;ertkus and published by Voyager Golden Comics.",
    },
    {
      name: "og:image",
      content: "https://willyandfroggy.com/images/Bright-Red.jpg",
    },
  ];
};

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
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="/scripts/scroll-to-top.js" type="module"></script>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  let errorHeading = "An error occurred";
  let errorMessage = "Opps! Something went wrong. Please try again later.";

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        errorHeading = "404 - Page Not Found";
        errorMessage =
          "Oops! Looks like you tried to visit a page that doesn't exist.";
        break;
    }
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <main className="basic-page">
          <h1>{errorHeading}</h1>
          <p>{errorMessage}</p>
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="/scripts/scroll-to-top.js" type="module"></script>
      </body>
    </html>
  );
}
