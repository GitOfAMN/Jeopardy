export default function DisplayScore({ increaseScore, score }) {
    return (
      <>
        <h2>In Component {score} </h2>
        <button onClick={increaseScore}>Increase</button>
      </>
    );
  }