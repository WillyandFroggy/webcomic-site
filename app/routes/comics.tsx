import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { Image } from "@unpic/react";

import comicsStyles from "~/styles/comics.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Comics | Willy + Froggy" },
    { name: "description", content: "Willy and Froggy comics, including The Theft of the Rare Blue Seaweed and Bright Red, are made by Amari &#268;ertkus and published by Voyager Golden Comics. The Theft of the Rare Blue Seaweed is an adventure comic, while Bright Red is a weekly humour strip that is associated with a forthcoming adventure comic that will be called The Bright Red Time Potion." },
    { name: "og:url", content: "https://willyandfroggy.com/comics" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: "Comics | Willy + Froggy" },
    { name: "og:description", content: "Willy and Froggy comics, including The Theft of the Rare Blue Seaweed and Bright Red, are made by Amari &#268;ertkus and published by Voyager Golden Comics. The Theft of the Rare Blue Seaweed is an adventure comic, while Bright Red is a weekly humour strip that is associated with a forthcoming adventure comic that will be called The Bright Red Time Potion." },
    { name: "og:image", content: "https://willyandfroggy.com/images/Bright-Red-Social-Media.jpg"}
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: comicsStyles },
  ];

export default function Comics() {
  return (
    <main>
      <div className="comics_banner" style={{backgroundColor: "rgb(191, 48, 69)"}}>
        <div className="comics_container">
          <div className="comics_image">
            <Image
              src="https://cdn.shopify.com/s/files/1/0671/9838/6420/files/Bright-Red.jpg?v=1712323077"
              layout="constrained"
              width={400}
              height={350}
              priority
              alt="Bright Red"
            />
          </div>
          <div className="comics_info">
            <h2>Bright Red</h2>
            <p>A weekly comic strip associated with the forthcoming adventure comic <em>The Bright Red Time Potion</em>.</p>
            <ul>
              <li><Link to="../" prefetch="intent">Read Online</Link></li>
              <li><Link to="../BR-archive" prefetch="intent">Comic Archive</Link></li>
              <li><a href="https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068504820">Buy Prints</a></li>
              <li><a href="https://www.webtoons.com/en/canvas/the-theft-of-the-rare-blue-seaweed/list?title_no=667854">Webtoon</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="comics_banner" style={{backgroundColor: "#2554a5"}}>
        <div className="comics_container">
          <div className="comics_image">
            <Image
              src="https://cdn.shopify.com/s/files/1/0671/9838/6420/files/The-Theft-of-the-Rare-Blue-Seaweed.jpg?v=1712323077"
              layout="constrained"
              width={400}
              height={350}
              priority
              alt="The Theft of the Rare Blue Seaweed"
            />
          </div>
          <div className="comics_info">
            <h2>The Theft of the Rare Blue Seaweed</h2>
            <p>A whale and a frog go on an adventure to stop a group of poachers from illegally harvesting an endangered plant species.</p>
            <ul>
              <li><a href="https://shop.willyandfroggy.com/products/the-theft-of-the-rare-blue-seaweed-print">Print Comic</a></li>
              <li><a href="https://shop.willyandfroggy.com/products/the-theft-of-the-rare-blue-seaweed-digital">Digital Comic</a></li>
              <li><a href="https://shop.willyandfroggy.com/products/the-theft-of-the-rare-blue-seaweed-t-shirt">T-Shirt</a></li>
              <li><a href="https://www.webtoons.com/en/canvas/the-theft-of-the-rare-blue-seaweed/list?title_no=667854">Webtoon</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
