import { useState } from "react";
import { useDispatch } from "react-redux";
import { showResult } from "../../redux/slice/CounterSlice";

const Operation2 = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState();
  const dispatch = useDispatch();

  
  const firstHandaler = (event) => {
    setFirstNum(event.target.value);
  };
  const secondHandler = (event) => {
    setSecondNum(event.target.value);
  };
  const sum = () => {
    setResult(Number(firstNum) + Number(secondNum));
    dispatch(showResult(result));
  };

  return (
    <div>
      <h2>Add Number</h2>
      <input onChange={firstHandaler} type="number" />
      <input onChange={secondHandler} type="number" />
      <button onClick={sum}>Result</button>
    </div>
  );
};

export default Operation2;
