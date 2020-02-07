import * as actionTypes from "../actionTypes";
import calculate from "./calculate";

let initialState = {
  expression: "",
  total: 0
};

const getResult = (state, action) => {
  const { payload } = action;
  const { expression, total } = state;
  let expressionTemp = expression + payload;
  const matched = new RegExp(
    "([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*"
  ).exec(expressionTemp);
  if (!matched) {
    return 0;
  }

  const t = `${matched[0]}`;
  console.log(t);
  return { ...state, expression: expression, total: t };
};

const deleteLastElement = (state, action) => {
  console.log(action);
  return { ...state };
};

const evaluateResult = (state, action) => {
  console.log(action);
  return { ...state };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPERATION:
      let expression = state.expression + action.payload;
      return {
        ...state,
        expression,
        total: calculate(expression)
      };
    case actionTypes.DELETE_LAST:
      let exp = state.expression;
      exp = exp
        .split("")
        .slice(0, exp.length - 1)
        .join("");
      return {
        ...state,
        expression: exp,
        total: calculate(exp)
      };
    case actionTypes.EVALUATE:
      return {
        ...state,
        expression: "",
        total: calculate(state.expression) || state.expression || state.total
      };
    default:
      return state;
  }
};
