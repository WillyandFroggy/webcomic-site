import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import comicsStyles from "~/styles/BR-archive.css";
import brightRedImage from "~/images/Bright-Red.jpg";
import baseStyles from "~/styles/base.css";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Bright Red Comic Archive | Willy + Froggy" },
    { name: "description", content: "Bright Red Comic Archive | Willy + Froggy" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: comicsStyles },
  ];



export default function Comics() {
  let data = [
    { "id": "005", "description": "The fifth comic" },
    { "id": "004", "description": "The fourth comic" },
    { "id": "003", "description": "The third comic" },
    { "id": "002", "description": "The second comic" },
    { "id": "001", "description": "The first comic" }
  ];

  return (
    <main className="BR-archive">
        <h2>Bright Red Comic Archive</h2>
        <ul>
        {data.map((comic) => (
            <li><Link to={`../BR/${comic.id}`}>{`#${comic.id}`}</Link></li>
          ))}
        </ul>
    </main>
  );
}
