import React, { useState } from 'react'

export default function RevealQuestion({ jeopardyQA }) {
  const [showQuestion, setShowQuestion] = useState(false)

  return (
    <div>
      <button
        onClick={() => {
          setShowQuestion(!showQuestion)
        }} className="reveal"
      >
        {showQuestion ? "Hide Question" : "Click to Reveal Question"}
      </button>
      {jeopardyQA && jeopardyQA.question && showQuestion ? (
        <div>{jeopardyQA.question}</div>
      ) : (
        ""
      )}
    </div>
  );
}