import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function HandlePrevStep() {
    step >= 2 && setStep((s) => s - 1);
  }
  function HandleReset() {
    setStep(1);
    setCount(0);
  }

  const today = new Date();
  today.setDate(today.getDate() + count);

  return (
    <>
      <div className="line">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <p> Step: {step} </p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="line">
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      {count == 0 ? (
        <p> Today is {today.toDateString()} </p>
      ) : count > 0 ? (
        <p>
          {" "}
          {count} days from today will be {today.toDateString()}{" "}
        </p>
      ) : (
        <p>
          {" "}
          {count} days ago was {today.toDateString()}{" "}
        </p>
      )}
      {(step >= 2 || count !== 0) && (
        <button onClick={HandleReset}>Reset</button>
      )}
    </>
  );
}
