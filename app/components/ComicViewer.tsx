import { Link } from "@remix-run/react";
import { useEffect } from "react";
import { Image } from "@unpic/react";

function ComicViewer(comic: { id: string, description: string, imageUrl: string, variantUrl: string, latest: string }) { 
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
  
    const shareHandler = async (e: Event) => {
      e.preventDefault();
      try {
        await navigatorVariable.share({
          title: `Bright Red #${comic.id}`,
          text: comic.description,
          url: `https://www.willyandfroggy.com/BR/${comic.id}`
        });
      } catch (error) {
        console.error('Share failed:', (error as Error).message);
      }
    };
  
    const copyHandler = (e: Event) => {
      e.preventDefault();
      navigator.clipboard.writeText("https://www.willyandfroggy.com/BR/" + comic.id);
    };
  
    if (shareLink) {
      if (navigatorVariable.share) {
        shareLink.addEventListener("click", shareHandler);
      } else {
        shareLink.addEventListener("click", copyHandler);
      }
    }
  
    // Cleanup function to remove event listeners when component unmounts or comic.id changes
    return () => {
      if (shareLink) {
        shareLink.removeEventListener("click", shareHandler);
        shareLink.removeEventListener("click", copyHandler);
      }
    };
  }, [comic.id]); // Run effect every time comic.id changes

  return (
    <div className="comic-viewer-container">
      <div className="comic-container">
        <Image
          id="comic-viewer-comic"
          src={comic.imageUrl}
          layout="constrained"
          width={880}
          height={880}
          priority
          alt={comic.description}
        />
      </div>
      <div className="comic-viewer-nav-links">
        {prevComic ? (        
          <Link to="/BR/001" prefetch="intent"
          className={prevComic ? '' : 'comic-viewer-hidden-link'}
          >&lt;&lt; First</Link>
        ) : (
          <span className="comic-viewer-hidden-link">&lt;&lt; First</span>
        )}
        {prevComic ? (
          <Link to={`/BR/${prevComic}`} prefetch="intent"
            className="comic-viewer-prev-button"
            >&lt; Previous</Link>
        ) : (
          <span className="comic-viewer-prev-button comic-viewer-hidden-link">&lt; Previous</span>
        )}
        {nextComic ? (
          <Link to={`/BR/${nextComic}`} prefetch="intent"
            className="comic-viewer-next-button"
            >Next &gt;</Link>
        ) : (
          <span className="comic-viewer-next-button comic-viewer-hidden-link">Next &gt;</span>
        )}
        {nextComic ? (
          <Link to={`/BR/${comic.latest}`} prefetch="intent"
          >Latest &gt;&gt;</Link>
        ) : (
          <span className="comic-viewer-hidden-link">Latest &gt;&gt;</span>
        )}
      </div>
      <div className="comic-viewer-ad-buttons">
        <a href={ comic.variantUrl } className="comic-viewer-ad-button">Buy Print</a>
        <a href="https://shop.willyandfroggy.com/products/tip-jar" className="comic-viewer-ad-button">Tip Jar</a>
      </div>
      <a id="comic-viewer-share-link" href="#" className="comic-viewer-share-link">
        <span>Share Link</span>
        <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.5 6.5L8.5 10.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8.5 13.5L15.5 17.5" stroke="currentColor" strokeWidth="1.5"/>
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