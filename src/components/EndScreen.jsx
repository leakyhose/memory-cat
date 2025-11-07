import Button from "./Button"

export default function EndScreen ({currentScore, highScore, restart}){

    
    return (<div>
        <div>{currentScore} cats memorized!</div>
        {
            currentScore>=highScore?
            (<div>
                Current high score: {highScore}
            </div>):
            (<div>
                New high score of {currentScore}!
            </div>)
        }

        <Button
        title = "Restart"
        handleClick = {restart}
        />
        
    </div>)
}