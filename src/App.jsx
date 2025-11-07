import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Scoreboard from './components/Scoreboard'
import Gameboard from './components/Gameboard'
import EndScreen from './components/EndScreen'

function App() {
  const [level, setLevel] = useState(0);
  const [highLevel, setHighLevel] = useState(0);
  const [screenState, setScreenState] = useState("game")

  function restart (){
    if (level > highLevel){
      setHighLevel(level);
      setLevel(0);
    }
  }

  return(
  <div className = "main">
    {
      screenState === "game" ? 
      (
        <>
          <Header/>
          <Scoreboard/>
          <Gameboard/>
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
