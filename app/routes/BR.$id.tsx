import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData, json } from "@remix-run/react";
import ComicViewer from "~/components/ComicViewer";

export function loader({ params }: LoaderFunctionArgs) {
  let data = [
    { "id": "005", "description": "The fifth comic" },
    { "id": "004", "description": "The fourth comic" },
    { "id": "003", "description": "The third comic" },
    { "id": "002", "description": "The second comic" },
    { "id": "001", "description": "The first comic" }
  ];
  const { id } = params;
  if (id === undefined) throw new Response("Id is undefined");
  const comic = data.find((comic) => comic.id === id);
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