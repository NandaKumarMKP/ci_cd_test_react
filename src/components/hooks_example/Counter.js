import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => {
    //   return prevCount + 1;
    // });
  };
  return (
    <>
      <div>Counter {count}</div>
      <button onClick={incrementHandler}>Click</button>
    </>
  );
}

export default Counter;
