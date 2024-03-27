import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import comicsStyles from "~/styles/comics.css";
import brightRedImage from "~/images/Bright-Red.jpg";
import rareBlueImage from "~/images/The-Theft-of-the-Rare-Blue-Seaweed.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "Comics | Willy + Froggy" },
    { name: "description", content: "Comics | Willy + Froggy" },
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
            <img src={brightRedImage} alt="Bright Red" />
          </div>
          <div className="comics_info">
            <h2>Bright Red</h2>
            <p>A weekly comic strip associated with the forthcoming adventure coming <em>The Bright Red Time Potion</em>.</p>
            <ul>
              <li><Link to="../" prefetch="intent">Read Online</Link></li>
              <li><Link to="../BR-archive" prefetch="intent">Comic Archive</Link></li>
              <li><a href="#">Buy Prints</a></li>
              <li><a href="https://www.webtoons.com/en/canvas/the-theft-of-the-rare-blue-seaweed/list?title_no=667854">Webtoon</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="comics_banner" style={{backgroundColor: "#2554a5"}}>
        <div className="comics_container">
          <div className="comics_image">
            <img src={rareBlueImage} alt="The Theft of the Rare Blue Seaweed" />
          </div>
          <div className="comics_info">
            <h2>The Theft of the Rare Blue Seaweed</h2>
            <p>A whale and a frog go on an adventure to stop a group of poachers from illegally harvesting an endangered plant species.</p>
            <ul>
              <li><a href="https://willyandfroggy.myshopify.com/products/the-theft-of-the-rare-blue-seaweed-print">Print Comic</a></li>
              <li><a href="https://willyandfroggy.myshopify.com/products/the-theft-of-the-rare-blue-seaweed-digital">Digital Comic</a></li>
              <li><a href="https://willyandfroggy.myshopify.com/products/the-theft-of-the-rare-blue-seaweed-t-shirt">T-Shirt</a></li>
              <li><a href="https://www.webtoons.com/en/canvas/the-theft-of-the-rare-blue-seaweed/list?title_no=667854">Webtoon</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
