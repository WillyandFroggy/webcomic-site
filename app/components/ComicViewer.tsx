import { Link } from "@remix-run/react";

function ComicViewer(comic: { id: string, description: string, latest: string }) { 
  let nextComic = null;
  let prevComic = null;

  if (parseInt(comic.id) - 1 > 0) {
    prevComic = (parseInt(comic.id) - 1).toString().padStart(3, '0');
  }

  if (comic.id !== comic.latest) {
    nextComic = (parseInt(comic.id) + 1).toString().padStart(3, '0');
  }

  return (
    <div className="comic-viewer-container">
      <img id="comic-viewer-comic" src={`/BR/${comic.id}.jpg`}
        alt={comic.description}></img>
      <div className="comic-viewer-nav-links">
        <Link to="/BR/001" prefetch="intent"
          style={prevComic ? {} : {visibility: 'hidden'}}>&lt;&lt; First</Link>
        <Link to={`/BR/${prevComic}`} prefetch="intent"
          className="comic-viewer-prev-button"
          style={prevComic ? {} : {visibility: 'hidden'}}>&lt; Previous</Link>
        <Link to={`/BR/${nextComic}`} prefetch="intent"
          className="comic-viewer-next-button"
          style={nextComic ? {} : {visibility: 'hidden'}}>Next &gt;</Link>
        <Link to={`/BR/${comic.latest}`} prefetch="intent"
         style={nextComic ? {} : {visibility: 'hidden'}}>Latest &gt;&gt;</Link>
      </div>
      <div className="comic-viewer-ad-buttons">
        <a href="https://www.shopify.com/" className="comic-viewer-ad-button">Buy Print</a>
        <a href="https://www.shopify.com/" className="comic-viewer-ad-button">Tip Jar</a>
      </div>
      <div className="comic-viewer-social-buttons">
        SHARE: <a href="https://www.facebook.com/">Facebook</a> | <a href="https://twitter.com/">Twitter</a>
      </div>
      <div className="comic-viewer-description">
        <em>Bright Red #{`${comic.id}`}</em> - Willy and froggy discuss the importance of the rare blue seaweed. and Froggy discuss the importance of the rare blue seaweed. It is a great thing to witness.
      </div>
      //line app share link
        <a href="https://line.me/R/msg/text/?Bright%20Red%20%231%20-%20Willy%20and%20Froggy%20discuss%20the%20importance%20of%20the%20rare%20blue%20seaweed.%20It%20is%20a%20great%20thing%20to%20witness.">Share on Line</a>
  </div>
  );
}

export default ComicViewer;