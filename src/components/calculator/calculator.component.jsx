import { useState } from "react";
import Operation from "../operation/operation.component";
import Result from "../result/result.component";

const Calculator = () => {
  const [result, setResult] = useState('');

  const resultHandler = (num1, num2) => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div>
      <Operation handler={resultHandler} />

      <Result result={result} />
    </div>
  );
};
export default Calculator;
