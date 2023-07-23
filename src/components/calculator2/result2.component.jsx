import React from "react";
import { useSelector } from "react-redux";
function Result2() {
  const result = useSelector((state) => state.counter.value);

  return <div>Total:{result} </div>;
}

export default Result2;
