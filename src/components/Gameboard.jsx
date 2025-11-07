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
            setNextCat(chooseCat())
        }
        else{
            setScreenState("end");
        }
    }

    useEffect(() => {
        setCat(chooseCat());
        setNextCat(chooseCat());
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