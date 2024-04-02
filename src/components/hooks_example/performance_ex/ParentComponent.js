import React, { useCallback, useState } from "react";
import Title from "./Title";
import Counter from "./Counter";
import Button from "./Button";
import { toast } from "react-toastify";

function ParentComponent() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(20000);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 5000);
  }, [salary]);

  return (
    <>
      <Title />
      <Counter text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Counter text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
}

export default ParentComponent;
