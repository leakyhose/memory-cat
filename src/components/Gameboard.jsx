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
        if (seenCats.length > 3 && checkChance(30 + Math.min(currentScore, 10))){
            const repeatedUrl = getRandomArray(seenCats);
            return ({
                url: repeatedUrl,
                seen: true
            });
        }
        else{
            const newCatUrl = getCat(seenCats);
            return ({
                url: newCatUrl,
                seen: false
            });
        }
    }

    function handleClick(id){
        if (cat.seen === id){
            setCurrentScore(prev => prev + 1);
            

            if (!cat.seen) {
                setSeenCats(prev => [...prev, cat.url]);
            }
            
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