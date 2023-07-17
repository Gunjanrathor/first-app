import { useState } from "react";

const Operation = ({handler}) => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");

  const firstHandaler = (event) => {
    setFirstNum(event.target.value);
  };
  const secondHandler = (event) => {
    setSecondNum(event.target.value);
  };

  return (
    <div>
      <h2>Add Number</h2>
      <input onChange={firstHandaler} type="number" />
      <input onChange={secondHandler} type="number" />
      <button onClick={()=>handler(firstNum, secondNum)}>Result</button>
    </div>
  );
};

export default Operation;
