function ComicViewer(comic: { id: string, description: string }) {
  console.log(comic);
  return (
    <div>
      <p>Comic Viewer</p>
      {comic.id}
      {comic.description}
    </div>
  );
}

export default ComicViewer;