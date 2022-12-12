import React from 'react'

export default function DisplayQA({ jeopardyQA, getJeopardyQA }) {
    return (
      <>
        {jeopardyQA && jeopardyQA.value ? (
          <>Answer is: {jeopardyQA.answer}</>
        ) : (
          <>No question yet</>
        )}
        <button onClick={getJeopardyQA}> Get A Question</button>
      </>
    );
  }