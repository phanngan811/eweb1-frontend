import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { couponReducer } from "./couponReducer";
import { CODReducer } from "./CODReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  coupon: couponReducer,
  COD: CODReducer,
});

export default rootReducer;
