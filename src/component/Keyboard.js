import React, { Component } from "react";
import ButtonValue from "../constant/ButtonValue";
import Button from "./Button";

export default class Keyboard extends Component {
  handleClick = key => {
    switch (key) {
      case "Delete":
        this.props.delete();
        break;
      case "Enter":
        this.props.evaluate();
        break;
      default:
        this.props.calculate(key);
        break;
    }
  };
  render() {
    return ButtonValue.map((btnSymbol, index) => {
      const { label, key } = btnSymbol;
      return (
        <Button
          key={key}
          onButtonClick={() => this.handleClick(key)}
          label={label}
        />
      );
    });
  }
}
