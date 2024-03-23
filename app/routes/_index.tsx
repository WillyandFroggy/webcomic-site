import type { MetaFunction } from "@remix-run/cloudflare";
import ComicViewer from "~/components/ComicViewer";

export const meta: MetaFunction = () => {
  return [
    { title: "Willy + Froggy" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main style={{backgroundColor: 'red'}}>
      <h1>Welcome to Remix</h1>
      <ComicViewer />
    </main>
  );
}
