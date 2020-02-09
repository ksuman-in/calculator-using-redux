/* eslint-disable no-new-func */
import * as actionTypes from "../actionTypes";

let initialState = {
  expression: "",
  total: 0,
  switchSymbol: "-"
};

const getValue = exp => {
  const regexp = new RegExp("([\\d]+\\.?[\\d]*)?([-+/*%][\\d]+\\.?[\\d]*)*");
  const match = regexp.exec(exp);
  return match;
};

const replaceString = str => {
  const regExp = /(\d)(?=(\d{3})+(?!\d))/g;
  return str.toString().replace(regExp, "$1,");
};

const numberFormat = num => {
  const decimal = num.toFixed(2);
  if (Number.isInteger(num)) return replaceString(num);
  else return replaceString(decimal);
};

const switchExpression = exp => {
  let matchChar = getValue(exp).input;
  const regex = new RegExp(/[^0-9]$/, "gm");
  const isMatch = regex.test(matchChar);
  if (isMatch) {
    matchChar = matchChar.substring(0, matchChar.length - 1);
  }
  return matchChar;
};

const calculateValue = expression => {
  const value = getValue(expression);
  if (!value) {
    return 0;
  }
  return new Function(`return ${value[0]}`)();
};

const evaluateOperation = (state, action) => {
  const { payload } = action;
  const { expression, total } = state;
  let expTemp = expression + payload;
  let tempTotal = total;
  const tempMatch = getValue(expTemp);
  if (tempMatch[0].length === 0) {
    expTemp = "";
    tempTotal = 0;
  } else {
    expTemp = expression + payload;
    let value = calculateValue(expTemp);
    tempTotal = numberFormat(value);
    if (tempTotal.toString().replace(/,/g, "").length > 14) {
      tempTotal = 0;
      expTemp = "";
    }
  }

  return { ...state, expression: expTemp, total: tempTotal, switchSymbol: "-" };
};

const switchOperation = (state, action) => {
  const { switchType } = action;
  const { expression, switchSymbol } = state;
  let ssymbol = switchSymbol;
  let expTemp = switchExpression(expression);
  const stype = switchType.split("/")[0];
  if (expTemp.length) {
    if (stype === ssymbol) {
      ssymbol = "-";
      expTemp += ssymbol;
    } else {
      ssymbol = "+";
      expTemp += ssymbol;
    }
  } else ssymbol = expTemp + "";
  return { ...state, switchSymbol: ssymbol, expression: expTemp };
};

const deleteLastElement = state => {
  const { expression, total } = state;
  let expTemp = expression;
  let tempTotal = total;
  expTemp = expTemp
    .split("")
    .slice(0, expTemp.length - 1)
    .join("");
  let value = calculateValue(expTemp);
  tempTotal = value ? numberFormat(value) : 0;
  return { ...state, expression: expTemp, total: tempTotal };
};

const evaluateResult = state => {
  const { total } = state;
  let tempTotal = total.toString().replace(/,/g, "");
  return { ...state, expression: tempTotal, total: 0 };
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPERATION:
      return evaluateOperation(state, action);
    case actionTypes.DELETE_LAST:
      return deleteLastElement(state);
    case actionTypes.EVALUATE:
      return evaluateResult(state);
    case actionTypes.SWITCH:
      return switchOperation(state, action);
    default:
      return state;
  }
};

export default calculator;
