import * as actionTypes from "../actionTypes";

export const calculate = expression => {
  return {
    type: actionTypes.OPERATION,
    payload: expression
  };
};

export const deleteLastEntry = () => {
  return {
    type: actionTypes.DELETE_LAST
  };
};

export const evaluateExpression = () => {
  return {
    type: actionTypes.EVALUATE
  };
};

export const switchExpression = switchType => {
  return {
    type: actionTypes.SWITCH,
    switchType
  };
};
