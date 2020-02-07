import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.scss";
import Keyboard from "../../component/Keyboard";
import Screen from "../../component/Screen";
import {
  calculate,
  deleteLastEntry,
  evaluateExpression
} from "../../redux/actions/calculate";
import * as fromCalculator from "../../redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <Screen {...this.props} />
        <div className="button-grp">
          <Keyboard {...this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: value => {
      dispatch(calculate(value));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
