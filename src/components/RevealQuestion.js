import React, { useState } from 'react'

export default function RevealQuestion({ jeopardyQA }) {
  const [showQuestion, setShowQuestion] = useState(false)

  return (
    <div>
      <button
        onClick={() => {
          setShowQuestion(!showQuestion)
        }}
      >
        {showQuestion ? "Hide Question" : "Reveal Question"}
      </button>
      {jeopardyQA && jeopardyQA.question && showQuestion ? (
        <div>{jeopardyQA.question}</div>
      ) : (
        ""
      )}
    </div>
  );
}