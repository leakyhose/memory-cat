import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Scoreboard from './components/Scoreboard'
import Gameboard from './components/Gameboard'
import EndScreen from './components/EndScreen'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [screenState, setScreenState] = useState("game")
  const [seenCats, setSeenCats] = useState([]);


  function restart (){
    if (currentScore > highScore){
      setHighScore(currentScore);
    }
    setCurrentScore(0);
    console.log("Restart")
    setScreenState("game")
    setSeenCats([]);

  }

  return(
  <div className = "main">
    {
      screenState === "game" ? 
      (
        <div>
          <div className="header-section">
            <Header/>
            <Scoreboard currentScore={currentScore} highScore={highScore}/>
          </div>
          <div className="game-content">
            <Gameboard 
              currentScore = {currentScore} 
              setCurrentScore = {setCurrentScore}
              setScreenState = {setScreenState}
              seenCats={seenCats}
              setSeenCats={setSeenCats}/> 
          </div>
        </div>
      ):
      (
        <div>
          <div className="header-section">
            <Header/>
          </div>
          <div className="game-content">
            <EndScreen
            currentScore = {currentScore}
            highScore = {highScore}
            restart = {restart}
            />
          </div>
        </div>
      )
    }
  </div>)
}

export default App
