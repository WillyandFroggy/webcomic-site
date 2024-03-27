import type { MetaFunction, LoaderFunctionArgs, LinksFunction } from "@remix-run/cloudflare";
import { useLoaderData, json } from "@remix-run/react";
import ComicViewer from "~/components/ComicViewer";
import { getComic, getLatestComic } from "~/data/comics";

import comicStyles from "~/styles/comic.css";

export function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (id === undefined) throw new Response("Id is undefined");
  const comic = getComic(id);
  const latest = getLatestComic();
  if (!comic || !latest) throw new Response("Comic not found", { status: 404 });
  return json({...comic, latest: latest.id});
}

export const meta: MetaFunction = () => {
  return [
    { title: `Bright Red #Make Dynamic` },
    { name: "description", content: "Comics | Willy + Froggy" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: comicStyles },
  ];

export default function BR() {
  const comic = useLoaderData<typeof loader>();
  return (
    <main>
      <ComicViewer {...comic} />
    </main>
  );
}