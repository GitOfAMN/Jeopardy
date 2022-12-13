import "./style.css"
import React from 'react'
import { useState, useEffect } from "react"
import DisplayScore from "./components/DisplayScore"
import DisplayQA from "./components/DisplayQA"
import RevealQuestion from "./components/RevealQuestion"

export default function App() {
    const [jeopardyQA, setJeopardyQA] = useState(null)
    const [score, setScore] = useState(0)


    const increaseScore = () => {
        if (jeopardyQA && jeopardyQA.value)
            setScore(score + jeopardyQA.value)
    }

    const decreaseScore = () => {
        if (jeopardyQA && jeopardyQA.value)
            setScore(score + jeopardyQA.value)
    }

    const resetScore = () => {
        if (jeopardyQA && jeopardyQA.value)
            setScore(score + jeopardyQA.value)
    };

    const getJeopardyQA = async () => {
        try {
            const response = await fetch('https://jservice.io/api/random')
            const data = await response.json()
            setJeopardyQA(data[0])
        } catch (error) {
            console.error(error)
        }
    }

    return (
            <div className="App">
                <h1>Welcome to Jeopardy!</h1>
                <h4>SCORE:{score}</h4>
                <DisplayScore
                    score={score}
                    decreaseScore={decreaseScore}
                    increaseScore={increaseScore}
                />
                <h4>Let's play!</h4>
                <DisplayQA jeopardyQA={jeopardyQA} getJeopardyQA={getJeopardyQA} />
                <h5>Category:</h5>
                <h6>Points:{score}</h6>
                <h6>Answer:</h6>
                <RevealQuestion jeopardyQA={jeopardyQA} />
        </div>
    )
}