import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import Counter_Reducer from "./Counter_Slice";

const store = configureStore({
  reducer: {
    counter: Counter_Reducer,
  },
});

export default store;
