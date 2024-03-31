import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
// import { Link } from "@remix-run/react";

import basicPageStyles from "~/styles/page.css";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Willy + Froggy" },
    { name: "description", content: "Willy and Froggy comics, including The Theft of the Rare Blue Seaweed and Bright Red, are made by Amari &#268;ertkus and published by Voyager Golden Comics. The Theft of the Rare Blue Seaweed is an adventure comic, while Bright Red is a weekly humour strip that is associated with a forthcoming adventure comic that will be called The Bright Red Time Potion." },
    { name: "og:url", content: "https://willyandfroggy.com/about" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: "About | Willy + Froggy" },
    { name: "og:description", content: "Willy and Froggy comics, including The Theft of the Rare Blue Seaweed and Bright Red, are made by Amari &#268;ertkus and published by Voyager Golden Comics. The Theft of the Rare Blue Seaweed is an adventure comic, while Bright Red is a weekly humour strip that is associated with a forthcoming adventure comic that will be called The Bright Red Time Potion." },
    { name: "og:image", content: "https://willyandfroggy.com/images/Bright-Red.jpg"}
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: basicPageStyles },
  ];

export default function About() {
  return (
    <main className="basic-page">
        <h1>About</h1>
        <p>Willy and Froggy comics, including <em>The Theft of the Rare Blue Seaweed</em> and <em>Bright Red</em>, are made by Amari &#268;ertkus and published by Voyager Golden Comics. <em>The Theft of the Rare Blue Seaweed</em> is an adventure comic, while <em>Bright Red</em> is a weekly humour strip that is associated with a forthcoming adventure comic that will be called <em>The Bright Red Time Potion</em>.</p>
        <p>Amari is fully comitted to completing <em>The Bright Red Time Potion</em> under any circumstances, but if you would like to speed up the process, please consider supporting the project through the <a href="#">TIP JAR</a> or <a href="#">ONLINE SHOP</a>. Also, please share these comics with anyone who you think would enjoy them.</p>
    </main>
  );
}
