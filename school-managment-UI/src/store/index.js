import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import studentReducer from "./student";

const store = configureStore({
  reducer: { auth: authReducer, student: studentReducer },
});

export default store;
