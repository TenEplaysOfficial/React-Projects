import { useState, useEffect } from "react";
import Backbtn from "../Backbtn";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const originalTitle = document.title;

    document.title = "Counter";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <Backbtn />
      <div className="hero">
        <div className="counter-project">
          <h1 className="title-big">Count is {count}</h1>
          <button onClick={increment} className="button">
            Increment
          </button>
          <button onClick={reset} className="button">
            Reset
          </button>
          <button onClick={decrement} className="button">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
