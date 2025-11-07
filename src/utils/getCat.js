export default function getCat(seenCats) {
    
    const data = `https://cataas.com/cat?height=200&width=200&random=${Math.random()}`;

    while(seenCats.includes(data)){
        const data = `https://cataas.com/cat?height=200&width=200&random=${Math.random()}`;
    }

    return data;
}