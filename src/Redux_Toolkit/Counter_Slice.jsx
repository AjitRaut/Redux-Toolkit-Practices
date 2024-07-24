import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const Counter_Slice = createSlice({
  name: "Counter",
  initialState: {
    value: 0,
  },
  reducers: {
    Increament: (state) => {
      state.value += 1;
    },
    Decreament: (state) => {
        state.value > 0 ?
      state.value -= 1 : ""
    },
  },
});

export const { Increament, Decreament } = Counter_Slice.actions;

export default Counter_Slice.reducer;
