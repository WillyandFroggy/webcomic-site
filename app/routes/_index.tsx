import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import { useLoaderData, json } from "@remix-run/react";
import ComicViewer from "~/components/ComicViewer";
import { getLatestComic } from "~/data/comics";

import comicStyles from "~/styles/comic.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: comicStyles },
];

export function loader() {
  const comic = getLatestComic();
  if (!comic) throw new Response("Comic not found", { status: 404 });
  return json({...comic, latest: comic.id});
}

export const meta: MetaFunction = () => {
  return [
    { title: "Willy + Froggy" },
    { name: "description", content: "Comics about a whale and a frog who go on adventures. These comics are made by Amari &#268;ertkus and published by Voyager Golden Comics." },
    { name: "og:url", content: "https://willyandfroggy.com/" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: "Willy + Froggy" },
    { name: "og:description", content: "Comics about a whale and a frog who go on adventures. These comics are made by Amari &#268;ertkus and published by Voyager Golden Comics." },
    { name: "og:image", content: "https://willyandfroggy.com/images/Bright-Red.jpg"}
  ];
};

export default function Index() {
  const comic = useLoaderData<typeof loader>();
  return (
    <main>
      <ComicViewer {...comic} />
    </main>
  );
}
