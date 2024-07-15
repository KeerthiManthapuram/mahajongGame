import React, {useState} from 'react'

import Welcomepage from '../Welcomepage'

import GameBoard from '../Gameboard'

import Successpage from '../Successpage'

import './index.css'

const AppContainer = () => {
    const [started, setStarted] = useState(false)
    const [gameEnded, setGameEnded] = useState(false)
    const [finalScore, setFinalScore] = useState(0)
    const [finalTime, setFinalTime] = useState(0)

    const startGame = () => setStarted(true)

    const endGame = (score, time) => {
        setFinalScore(score)
        setFinalTime(time)
        setGameEnded(true)
    }

    return(
        <div className='app-container'>
            {!started && <Welcomepage onStart={startGame} />}
            {started && !gameEnded && <GameBoard onGameEnd={endGame} />}
            {gameEnded && <Successpage score={finalScore} time={finalTime} />}
        </div>
    )
}
export default AppContainer