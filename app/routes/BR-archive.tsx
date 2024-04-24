import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { Image } from "@unpic/react";
import comicsStyles from "~/styles/BR-archive.css";
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
      <Image
        src="https://cdn.shopify.com/s/files/1/0671/9838/6420/files/Bright-Red-Comic-Archive.png?v=1712323077"
        layout="constrained"
        width={300}
        height={140}
        alt="Bright Red Comic Archive"
      />
      <ul>
      {data.map((comic) => (
          <li><Link to={`../BR/${comic.id}`} key={comic.id}>{`#${comic.id}`}</Link></li>
        ))}
      </ul>
    </main>
  );
}
