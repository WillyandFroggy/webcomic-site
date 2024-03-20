import type { MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, json } from "@remix-run/react";

// make a loader function that just loads json as a learning example, it should be typescript
export function loader() {
  return json({ slug: "This is the slug", title: "This is the title" });
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Comics | Willy + Froggy" },
  ];
};

export default function BR() {

  interface Params {
    slug: string;
    // define other properties if any
  }
// useLoaderData is a hook that returns the data from the loader
  const params: Params | undefined = useLoaderData();

  return (
    <div className="main">
      <h1>BR Comic</h1>
      {params?.slug}
    </div>
  );
}