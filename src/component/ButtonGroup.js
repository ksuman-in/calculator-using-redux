import React from "react";
import ButtonValue from "../constant/ButtonValue";
import Button from "./Button";

const ButtonGroup = props => {
  const handleClick = (type, key) => {
    const { deleteLast, evaluate, calculate, switchEvaluate } = props;
    switch (type) {
      case "delete":
        deleteLast();
        break;
      case "enter":
        evaluate();
        break;
      case "switch":
        switchEvaluate(key);
        break;
      default:
        calculate(key);
        break;
    }
  };
  return ButtonValue.map((item, index) => {
    const { label, type, key } = item;
    return (
      <Button
        key={index}
        onButtonClick={() => handleClick(type, key)}
        label={label}
      />
    );
  });
};

export default ButtonGroup;
