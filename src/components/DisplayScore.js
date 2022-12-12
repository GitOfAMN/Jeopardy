import React from 'react'

export default function DisplayScore({ increaseScore, decreaseScore, resetScore, score }) {
  return (
      <>
        <button onClick={increaseScore}>Increase</button>
        <button onClick={decreaseScore}>Decrease</button>
        <button onClick={resetScore}>Reset</button>
      </>

      );
  }