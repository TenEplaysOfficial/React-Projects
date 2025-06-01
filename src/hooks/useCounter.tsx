import { useState } from 'react';

export default function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = (n = 1) => {
    setCount((prevCount) => prevCount + n);
  };

  const decrement = (n = 1) => {
    setCount((prevCount) => prevCount - n);
  };

  const reset = () => {
    setCount(initialValue);
  };
  return { increment, decrement, reset, count };
}
