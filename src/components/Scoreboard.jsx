export default function Scoreboard ({currentScore, highScore}) {
    return (
    <div className="Scoreboard">
        <div className="score">Current score: {currentScore}</div>
        <div className="highScore">High score: {highScore}</div>
    </div>
    )}