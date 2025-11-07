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

  function restart (){
    if (currentScore > highScore){
      setHighScore(level);
    }
    setCurrentScore(0);
    console.log("Restart")
    setScreenState("game");

  }

  return(
  <div className = "main">
    {
      screenState === "game" ? 
      (
        <div>
          <Header/>
          <Scoreboard currentScore={currentScore} highScore={highScore}/>
          <Gameboard 
            currentScore = {currentScore} 
            setCurrentScore = {setCurrentScore}
            setScreenState = {setScreenState}/> 
        </div>
      ):
      (
        <div>
          <Header/>
          <EndScreen
          currentScore = {currentScore}
          highScore = {highScore}
          restart = {restart}
          />
        </div>
      )
    }
  </div>)
}

export default App
