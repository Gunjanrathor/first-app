import { useState } from "react";
import Operation1 from "../operation1/operation1.component";
import Result1 from "../result1/result1.component";
import { SumContext } from "../../context/sum.context";

const Calculator1 = () => {
  const [result, setResult] = useState("");

  const resultHandler = (num1, num2) => {
    setResult(Number(num1) + Number(num2));
  };
   
  return (
    <SumContext.Provider value={{result}}>
      <Operation1 handler={resultHandler} />
      <Result1 />
    </SumContext.Provider>
  );
};
export default Calculator1;
