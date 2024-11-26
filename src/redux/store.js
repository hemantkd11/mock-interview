import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, userReducer } from "../counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
