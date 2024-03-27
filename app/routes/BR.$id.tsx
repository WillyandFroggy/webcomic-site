import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData, json } from "@remix-run/react";
import ComicViewer from "~/components/ComicViewer";
import { getComic } from "~/data/comics";

export function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (id === undefined) throw new Response("Id is undefined");
  const comic = getComic(id);
  if (!comic) throw new Response("Comic not found", { status: 404 });
  return json(comic);
}

export const meta: MetaFunction = () => {
  return [
    { title: `Bright Red #Make Dynamic` },
    { name: "description", content: "Comics | Willy + Froggy" },
  ];
};

export default function BR() {
  const comic = useLoaderData<typeof loader>();
  return (
    <div className="main">
      <h1>BR Comic</h1>
      {comic.id}
      <ComicViewer {...comic} />
    </div>
  );
}