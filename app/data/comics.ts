let comics = [
    {
        "id": "005",
        "description": "Willy asks Froggy if he is going to the jamboree. Froggy is planning to go, and is especially excited for the fireworks. Willy is frustrated by Froggy's misuse of a common English expression.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0671/9838/6420/files/005.jpg?v=1712323163",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44821857501428"
    },
    {
        "id": "004",
        "description": "Mrs. Applebee attempts to persuade Bluey into sweeping sparkles off the floor, but her plan is ultimately thwarted by Bluey's playful spirit. She tries not to get too frustrated.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0671/9838/6420/files/004.jpg?v=1712323163",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068308212"
    },
    {
        "id": "003",
        "description": "Snowy's father bestows upon him generations-old wisdom about courtship. Unfortunately, it's not the advice Snowy had hoped for, leaving him more discouraged than ever in his quest to win Sammy's heart.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0671/9838/6420/files/003.jpg?v=1712323164",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068373748"
    },
    {
        "id": "002",
        "description": "Mr. Raven faces a dilemma when Sammy earns a star that he cannot award. Luckily, Billy's classroom antics offer Mr. Raven a clever solution to his predicament.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0671/9838/6420/files/002.jpg?v=1712323163",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068439284"
    },
    {
        "id": "001",
        "description": "Mr. Barker scolds Froggy for his lackadaisical warmup. Joey takes notice and launches a hurtful taunt, accidentally catching Toadmo in the crossfire.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0671/9838/6420/files/001.jpg?v=1712323163",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068504820"
    }
  ];

export function getLatestComic() {
    return comics[0];
}

export function getComic(id: string) {
    const index = comics.findIndex((comic) => comic.id === id);
    if (index === -1) {
        return null;
    }

    const comic = comics[index];
    const prevComicImageUrl = index > 0 ? comics[index - 1].imageUrl : comics[index].imageUrl;
    const nextComicImageUrl = index < comics.length - 1 ? comics[index + 1].imageUrl : comics[index].imageUrl;

    return {
        ...comic,
        prevComicImageUrl,
        nextComicImageUrl
    };
}

export function getAllComics() {
    return comics;
}