import type { MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, json } from "@remix-run/react";
import ComicViewer from "~/components/ComicViewer";
import { getLatestComic } from "~/data/comics";

export const meta: MetaFunction = () => {
  return [
    { title: "Willy + Froggy" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader() {
  const comic = getLatestComic();
  console.log(comic);
  if (!comic) throw new Response("Comic not found", { status: 404 });
  return json(comic);
}

export default function Index() {
  const comic = useLoaderData<typeof loader>();
  return (
    <main style={{backgroundColor: 'red'}}>
      <h1>Welcome to Remix</h1>
      <ComicViewer {...comic} />
    </main>
  );
}
