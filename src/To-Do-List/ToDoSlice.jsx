import { createSlice } from "@reduxjs/toolkit";
import React from "react";


const ToDoSlice = createSlice({
  name: "To-Do-List",
  initialState: {
    todos: [],
  },
  reducers: {
    Add_Todo: (state , action) => {
      state.todos.push(action.payload);
    },
    Dlelete_Todo: (state , action) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
  },
});
export const {Add_Todo , Dlelete_Todo} = ToDoSlice.actions;
export default ToDoSlice.reducer;
