import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../page/counter/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
