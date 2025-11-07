import { checkChance, getRandomArray } from "../utils/probabilityUtil";
import getCat from "../utils/getCat";
import { useState, useEffect } from 'react'

export default function GameBoard (
    {
        currentScore,
        setCurrentScore,
        setScreenState
    }
){ 
    const [card, setCard] = useState({});
    const [seenCards, setSeenCards] = useState([]);

    async function chooseCard() {
        if (seenCards.length > 4 && checkChance(40)){
            setCard(getRandomArray(seenCards));
        }
        else{
            setCard(getCat());
            setSeenCards(prev => [...prev, card]);
        }
    }
    
    useEffect(() => {
        chooseCard();
    }, []);

    return <div>
        <img src={card} />
    </div>

}