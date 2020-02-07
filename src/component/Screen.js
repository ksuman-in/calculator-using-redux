import React from "react";
export default props => {
  return (
    <div className="calculator-screen">
      <p className="screen-top">{props.expression}</p>
      <p className="screen-bottom">{props.total}</p>
    </div>
  );
};
