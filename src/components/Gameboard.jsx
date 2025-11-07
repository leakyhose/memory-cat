import { checkChance, getRandomArray } from "../utils/probabilityUtil";
import getCat from "../utils/getCat";
import { useState, useEffect } from 'react'
import Button from "./Button.jsx"

export default function GameBoard (
    {
        setCurrentScore,
        setScreenState,
    }
){ 
    const [cat, setCat] = useState({
        url: "",
        seen: false
    });
    const [nextCat, setNextCat] = useState({
        url: "",
        seen: false
    });

    const [seenCats, setSeenCats] = useState([]);

    function preloadImage(url) {
        const img = new Image();
        img.src = url;
    }

    function chooseCat() {
        if (seenCats.length > 4 && checkChance(40)){
            return ({
                url: getRandomArray(seenCats),
                seen: true
            });
        }
        else{
            const newCatUrl = getCat();
            setSeenCats(prev => [...prev, newCatUrl])
            return ({
                url: newCatUrl,
                seen: false
            });
        }
    }

    function handleClick(id){
        if (cat.seen == id){
            setCurrentScore(prev => prev + 1);
            setCat(nextCat);
            const newNext = chooseCat();
            preloadImage(newNext.url);
            setNextCat(newNext);
        }
        else{
            setScreenState("end");
        }
    }

    useEffect(() => {
        const firstCat = chooseCat();
        const secondCat = chooseCat();
        preloadImage(firstCat.url);
        preloadImage(secondCat.url);
        setCat(firstCat);
        setNextCat(secondCat);
    }, []);

    return (<div>
        {cat.url && <img src={cat.url} />}
        <div>
            <Button
            title = "Seen"
            handleClick = {() => handleClick(true)}
            />
            <Button
            title = "New"
            handleClick = {() => handleClick(false)}
            />
        </div>
    </div>)

}