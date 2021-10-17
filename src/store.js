import { createStore } from "redux";
import { reducer } from "./reducers";
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); //don't it into production
export const store = createStore(reducer, enhancer);
