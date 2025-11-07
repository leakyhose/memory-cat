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
    const [card, setCard] = useState({
        url: "",
        seen: false
    });
    const [seenCards, setSeenCards] = useState([]);

    async function chooseCard() {
        if (seenCards.length > 4 && checkChance(40)){
            setCard({
                url: getRandomArray(seenCards),
                seen: true
            });
        }
        else{
            setCard({
                url: getCat(),
                seen: false
            });
            setSeenCards(prev => [...prev, card.url]);
        }
    }

    
    
    useEffect(() => {
        chooseCard();
    }, []);



    return <div>
        <img src={card} />
    </div>

}