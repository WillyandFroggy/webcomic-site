import { Link } from "@remix-run/react";
import { useEffect } from "react";

function ComicViewer(comic: { id: string, description: string, variantUrl: string, latest: string }) { 
  let nextComic = null;
  let prevComic = null;

  if (parseInt(comic.id) - 1 > 0) {
    prevComic = (parseInt(comic.id) - 1).toString().padStart(3, '0');
  }

  if (comic.id !== comic.latest) {
    nextComic = (parseInt(comic.id) + 1).toString().padStart(3, '0');
  }

  useEffect(() => {
    const shareLink = document.getElementById("comic-viewer-share-link");
    const navigatorVariable: any = window.navigator;
    if (shareLink) {
      if (navigatorVariable.share) {
        shareLink.addEventListener("click", async (e) => {
          e.preventDefault();
          try {
            await navigatorVariable.share({
              title: `Bright Red #${comic.id}`,
              text: comic.description,
              url: window.location.href
            });
          } catch (error) {
            console.error('Share failed:', (error as Error).message);
          }
        });

      } else {
        shareLink.addEventListener("click", (e) => {
          e.preventDefault();
          navigator.clipboard.writeText(window.location.href);
        });
      }
    }
  });

  return (
    <div className="comic-viewer-container">
      <div className="comic-container">
      <img id="comic-viewer-comic" src={`/BR/${comic.id}.jpg`}
          alt={comic.description}/>
      </div>
      <div className="comic-viewer-nav-links">
        <Link to="/BR/001" prefetch="intent"
          style={prevComic ? {} : {visibility: 'hidden'}}>&lt;&lt; First</Link>
        <Link to={prevComic ? `/BR/${prevComic}` : "#"} prefetch="intent"
          className="comic-viewer-prev-button"
          style={prevComic ? {} : {visibility: 'hidden'}}>&lt; Previous</Link>
        <Link to={nextComic ? `/BR/${nextComic}` : "#"} prefetch="intent"
          className="comic-viewer-next-button"
          style={nextComic ? {} : {visibility: 'hidden'}}>Next &gt;</Link>
        <Link to={`/BR/${comic.latest}`} prefetch="intent"
         style={nextComic ? {} : {visibility: 'hidden'}}>Latest &gt;&gt;</Link>
      </div>
      <div className="comic-viewer-ad-buttons">
        <a href={ comic.variantUrl } className="comic-viewer-ad-button">Buy Print</a>
        <a href="https://shop.willyandfroggy.com/products/tip-jar" className="comic-viewer-ad-button">Tip Jar</a>
      </div>
      <a id="comic-viewer-share-link" href="#" className="comic-viewer-share-link">
        <span>Share Link</span>
        <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.5 6.5L8.5 10.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8.5 13.5L15.5 17.5" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </a>
      <div className="comic-viewer-description">
        <h2>Bright Red #{comic.id}</h2>
        <p>{comic.description}</p>
      </div>
    </div>
  );
}

export default ComicViewer;