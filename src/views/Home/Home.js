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
import * as fromRedux from "../../redux";

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
    expression: fromRedux.getExpression(state),
    total: fromRedux.getTotal(state)
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
    switchEvaluate: percent => {
      dispatch(switchExpression(percent));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
