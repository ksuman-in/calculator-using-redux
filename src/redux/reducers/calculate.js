/* eslint-disable no-new-func */
/* eslint-disable no-useless-escape */
export default expression => {
  const matched = new RegExp(
    "([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*"
  ).exec(expression);

  if (!matched) {
    return 0;
  }

  return new Function(`return ${matched[0]}`)();
};
