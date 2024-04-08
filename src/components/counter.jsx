import { useState } from "react";
function Counter() {
  let [count, setCounter] = useState(0);
  const increment = () => {
    setCounter(count + 1);
  };
  const decrement = () => {
    setCounter(count - 1);
  };
  console.log("Rendered counter");
  return (
    <div className="text-center">
      <h1>Counter</h1>
      <span className="block">{count}</span>
      <button className="mx-2" onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default Counter;
