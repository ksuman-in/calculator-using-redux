import React from "react";
import { connect } from "react-redux";
import "./Home.scss";
import ButtonGroup from "../../component/ButtonGroup";
import Screen from "../../component/Screen";
import {
  calculate,
  deleteLastEntry,
  evaluateExpression,
  switchExpression
} from "../../redux/actions/calculatorAction";

const Home = props => {
  const { expression, total } = props;
  return (
    <div className="calculator">
      <Screen expression={expression} total={total} />
      <div className="button-grp">
        <ButtonGroup {...props} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expression: state.calculator.expression,
    total: state.calculator.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: value => {
      dispatch(calculate(value));
    },
    deleteLast: () => {
      dispatch(deleteLastEntry());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    },
    switchEvaluate: data => {
      dispatch(switchExpression(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
