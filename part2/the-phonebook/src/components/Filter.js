import React from "react";

const Filter = ({ value, change }) => {
  return (
    <div>filter shown with:{<input value={value} onChange={change} />}</div>
  );
};


export default Filter;