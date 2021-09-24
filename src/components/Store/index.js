import { combineReducers } from "redux";
import { cart } from "./cart";
import { product } from "./product";
import { ui } from "./ui";

const rootReducer = combineReducers({
  cart,
  product,
  ui,
});

export default rootReducer;
