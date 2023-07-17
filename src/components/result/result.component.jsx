import React from "react";

const Result = ({result}) => {
  return (
    <div>
      <span>Total: {result > 0 ? result:''} </span>
    </div>
  );
};
export default Result;
