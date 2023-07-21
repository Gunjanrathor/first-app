import React, { useContext } from "react";
import { SumContext } from "../../context/sum.context";
const Result1 = () => {
    const {result,setResult} = useContext(SumContext)
  return (
    <div>
      <span>Total: {result} </span>
      
    </div>
  );
};
export default Result1;
