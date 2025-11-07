import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Scoreboard from './components/Scoreboard'
import Gameboard from './components/Gameboard'
import EndScreen from './components/EndScreen'

function App() {
  const [currentScore, setScore] = useState(0);
  const [highScore, setCurrentScore] = useState(0);
  const [screenState, setScreenState] = useState("game")

  function restart (){
    if (level > highLevel){
      setHighScore(level);
    }
    setScore(0);

  }

  return(
  <div className = "main">
    {
      screenState === "game" ? 
      (
        <>
          <Header/>
          <Scoreboard currentScore={currentScore} highScore={highScore}/>
          <Gameboard 
          currentScore = {currentScore} 
          setCurrentScore={setCurrentScore}
          setScreenState={setScreenState}/> 
        </>
      ):
      (
        <>
          <Header/>
          <EndScreen/>
        </>
      )
    }
  </div>)
}

export default App
