let comics = [
    {
        "id": "005",
        "description": "Willy asks Froggy if he is going to the jamboree. Froggy is planning to go, and is especially excited for the fireworks. Willy is frustrated by Froggy's misuse of a common English expression.",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44821857501428"
    },
    {
        "id": "004",
        "description": "Mrs. Applebee attempts to persuade Bluey into sweeping sparkles off the floor, but her plan is ultimately thwarted by Bluey's playful spirit. She tries not to get too frustrated.",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068308212"
    },
    {
        "id": "003",
        "description": "Snowy's father bestows upon him generations-old wisdom about courtship. Unfortunately, it's not the advice Snowy had hoped for, leaving him more discouraged than ever in his quest to win Sammy's heart.",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068373748"
    },
    {
        "id": "002",
        "description": "Mr. Raven faces a dilemma when Sammy earns a star that he cannot award. Luckily, Billy's classroom antics offer Mr. Raven a clever solution to his predicament.",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068439284"
    },
    {
        "id": "001",
        "description": "Mr. Barker scolds Froggy for his lackadaisical warmup. Joey takes notice and launches a hurtful taunt, accidentally catching Toadmo in the crossfire.",
        "variantUrl": "https://shop.willyandfroggy.com/products/bright-red-prints?variant=44818068504820"
    }
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