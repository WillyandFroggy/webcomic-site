let comics = [
    { "id": "005", "description": "Willy asks Froggy if he is going to the jamboree. Froggy is planning to go, and is especially excited for the fireworks. Willy is frustrated by Froggy's misuse of a common English expression.", "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44821857501428" },
    { "id": "004", "description": "The fourth comic", "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068308212" },
    { "id": "003", "description": "The third comic", "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068373748" },
    { "id": "002", "description": "The second comic", "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068439284" },
    { "id": "001", "description": "The first comic", "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068504820" }
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