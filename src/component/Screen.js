import React from "react";

const Screen = props => {
  return (
    <div className="calculator-screen">
      <p className="screen-top">{props.expression}</p>
      <p className="screen-bottom">{props.total}</p>
    </div>
  );
};

export default Screen;
