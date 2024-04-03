import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import comicsStyles from "~/styles/BR-archive.css";
import { Link } from "@remix-run/react";
import { getAllComics } from "~/data/comics";

export const meta: MetaFunction = () => {
  return [
    { title: "Bright Red Comic Archive | Willy + Froggy" },
    { name: "description", content: "Bright Red is a weekly humour strip that is associated with a forthcoming adventure comic that will be called The Bright Red Time Potion. Browse the archive to read all past comics." },
    { name: "og:url", content: "https://willyandfroggy.com/about" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: "Bright Red Comic Archive | Willy + Froggy" },
    { name: "og:description", content: "Bright Red is a weekly humour strip that is associated with a forthcoming adventure comic that will be called The Bright Red Time Potion. Browse the archive to read all past comics." },
    { name: "og:image", content: "https://willyandfroggy.com/images/Bright-Red-Social-Media.jpg"}
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: comicsStyles },
  ];

export default function Comics() {
  let data = getAllComics();

  return (
    <main className="BR-archive">
      <img src="/images/Bright-Red-Comic-Archive.png" alt="Bright Red Comic Archive" />
        <ul>
        {data.map((comic) => (
            <li><Link to={`../BR/${comic.id}`}>{`#${comic.id}`}</Link></li>
          ))}
        </ul>
    </main>
  );
}
