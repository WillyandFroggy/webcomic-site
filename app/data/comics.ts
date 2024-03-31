let comics = [
    { "id": "005", "description": "Willy asks Froggy if he is going to the jamboree. Froggy is planning to go, and is especially excited for the fireworks. Willy is frustrated by Froggy's misuse of a common English expression." },
    { "id": "004", "description": "The fourth comic" },
    { "id": "003", "description": "The third comic" },
    { "id": "002", "description": "The second comic" },
    { "id": "001", "description": "The first comic" }
  ];

export function getLatestComic() {
    return comics[0];
}

export function getComic(id: string) {
    return comics.find((comic) => comic.id === id);
}

export function getAllComics() {
    return comics;
}