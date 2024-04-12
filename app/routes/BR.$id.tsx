import type { MetaFunction, LoaderFunctionArgs, LinksFunction } from "@remix-run/cloudflare";
import { useLoaderData, json } from "@remix-run/react";
import ComicViewer from "~/components/ComicViewer";
import { getComic, getLatestComic } from "~/data/comics";

import comicStyles from "~/styles/comic.css";

export function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (id === undefined) throw new Response("Id is undefined");
  const latest = getLatestComic();  
  const comic = getComic(id);
  if (!comic || !latest) throw new Response("Comic not found", { status: 404 });
  return json({ ...comic, latest: latest.id });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `Bright Red #${data?.id} | Willy + Froggy` },
    { name: "description", content: `${ data?.description }` },
    { name: "og:url", content: "https://willyandfroggy.com/comics" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: `Bright Red #${data?.id} | Willy + Froggy` },
    { name: "og:description", content: `${ data?.description }` },
    { name: "og:image", content: "https://willyandfroggy.com/images/Bright-Red-Social-Media.jpg"}
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