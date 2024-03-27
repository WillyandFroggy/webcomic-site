import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import { useLoaderData, json } from "@remix-run/react";
import ComicViewer from "~/components/ComicViewer";
import { getLatestComic } from "~/data/comics";

import comicStyles from "~/styles/comic.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Willy + Froggy" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: comicStyles },
  ];

export function loader() {
  const comic = getLatestComic();
  console.log(comic);
  if (!comic) throw new Response("Comic not found", { status: 404 });
  return json({...comic, latest: "007"});
}

export default function Index() {
  const comic = useLoaderData<typeof loader>();
  return (
    <main>
      <ComicViewer {...comic} />
    </main>
  );
}
