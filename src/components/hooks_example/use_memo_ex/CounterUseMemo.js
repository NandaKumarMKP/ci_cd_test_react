import React, { useMemo, useState } from "react";

function CounterUseMemo() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCountOne = () => {
    setCountOne((preCount) => preCount + 1);
  };
  const incrementCountTwo = () => {
    setCountTwo((preCount) => preCount + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);
  
  return (
    <>
      <h1>CounterUseMemo</h1>
      <button onClick={incrementCountOne}>Increment One - {countOne}</button>
      <h4>{isEven ? "Even" : "Odd"}</h4>
      <button onClick={incrementCountTwo}>Increment Two - {countTwo}</button>
    </>
  );
}

export default CounterUseMemo;
