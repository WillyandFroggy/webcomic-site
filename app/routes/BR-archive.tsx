import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import comicsStyles from "~/styles/BR-archive.css";
import { Link } from "@remix-run/react";
import comicArchiveImage from "~/images/Bright-Red-Comic-Archive.png";
import { getAllComics } from "~/data/comics";

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
  let data = getAllComics();

  return (
    <main className="BR-archive">
      <img src={comicArchiveImage} alt="Bright Red Comic Archive" />
        <ul>
        {data.map((comic) => (
            <li><Link to={`../BR/${comic.id}`}>{`#${comic.id}`}</Link></li>
          ))}
        </ul>
    </main>
  );
}
