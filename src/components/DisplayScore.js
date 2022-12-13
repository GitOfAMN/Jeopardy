import React from 'react'

export default function DisplayScore({ increaseScore, decreaseScore, resetScore, score }) {
  return (
      <>
        <button onClick={increaseScore} className="increase">Increase</button>
        <button onClick={decreaseScore} className="decrease">Decrease</button>
        <button onClick={resetScore} className="reset">Reset</button>
      </>

      );
  }