import React from "react";
import "../style/Button.scss";

const Button = ({ onButtonClick, label }) => {
  let handleClick = () => {
    onButtonClick(label);
  };
  return (
    <button className="button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
