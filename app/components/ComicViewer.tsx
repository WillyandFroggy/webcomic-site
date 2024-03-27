function ComicViewer(comic: { id: string, description: string, latest: string }) { 
  return (
    <div className="comic-viewer-container">
      <img id="comic-viewer-comic" src="/BR/001.jpg" alt="Bright Red Comic #001"></img>
      <div className="comic-viwer-links">
        <a id="first-arrow" href="./001.html" className="left-arrows-navigate-comic">&lt;&lt; First</a>
        <a id="previous-arrow" href="#" className="left-arrows-navigate-comic">&lt; Previous</a>
        <a id="latest-arrow" href="../index.html" className="right-arrows-navigate-comic">Latest &gt;&gt;</a>
        <a id="next-arrow" href="#" className="right-arrows-navigate-comic">Next &gt;</a>
      </div>
      {comic.id}
      {comic.description}
      {comic.latest}
  </div>
  );
}

export default ComicViewer;