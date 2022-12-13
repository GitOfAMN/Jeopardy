import React, { Component }  from 'react';

export default function DisplayQA({ jeopardyQA, getJeopardyQA }) {
    return (
      <>
        {jeopardyQA && jeopardyQA.value ? (
          <>Answer is: {jeopardyQA.answer}</>
        ) : (
          <>No question yet</>
        )}
        <button onClick={getJeopardyQA} className="question"> Get Question</button>
      </>
    );
  }