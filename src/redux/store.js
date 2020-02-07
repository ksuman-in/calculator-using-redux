import { createStore, combineReducers } from "redux";
import calculateReducer from "../redux/reducers/calculatorReducer";

const rootReducer = combineReducers({
  calculator: calculateReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
