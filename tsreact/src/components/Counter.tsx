import { useRef, useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number>(count);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
