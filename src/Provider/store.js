import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coin/coinSlice";
import  authReducer from "./auth/authSlice";
import cardReducer from "./Card/CardSlice"
const store = configureStore({
  reducer: {
    coins: coinReducer,
    auth:authReducer,
    card:cardReducer,
  },
});
export default store;
