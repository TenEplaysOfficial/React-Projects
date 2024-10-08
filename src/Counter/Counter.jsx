import { useState } from "react";
import "./Counter.css";

function Count() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function Decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <>
      <div>
        <h2>Count is {count} </h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
}

export default Count;
