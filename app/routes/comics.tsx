import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";

import comicsStyles from "~/styles/comics.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Comics | Willy + Froggy" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: comicsStyles },
  ];

export default function Comics() {
  return (
    <main>
      <h1>Comics</h1>
    </main>
  );
}
