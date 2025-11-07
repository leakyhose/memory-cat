import { checkChance, getRandomArray } from "../utils/probabilityUtil";
import getCat from "../utils/getCat";
import { useState, useEffect } from 'react'
import Button from "./Button.jsx"

export default function GameBoard (
    {   
        currentScore,
        setCurrentScore,
        setScreenState,
        seenCats,
        setSeenCats
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
    function preloadImage(url) {
        const img = new Image();
        img.src = url;
    }

    function chooseCat() {
        if (seenCats.length > 4 && checkChance(20 + Math.max(2*currentScore, 20))){
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
        setCat(firstCat);
        preloadImage(secondCat.url);
        setNextCat(secondCat);
    }, []);

    return (
        <>
            {cat.url && <img src={cat.url} alt="Cat" />}
            <div className="button-section">
                <Button
                title = "Seen"
                handleClick = {() => handleClick(true)}
                />
                <Button
                title = "New"
                handleClick = {() => handleClick(false)}
                />
            </div>
        </>
    )

}