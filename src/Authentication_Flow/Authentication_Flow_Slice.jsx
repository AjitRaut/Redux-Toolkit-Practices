import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name : "Auth",
    initialState:{
        isAuthenticated:false,
        user : null,
        error : null,
    },
    reducers: {
        loginSuccess: (state, action) => {
          state.user = action.payload.username;
          state.isAuthenticated = true;
          state.user = action.payload;
          state.error = null;
        },
        loginFailure: (state, action) => {
          state.isAuthenticated = false;
          state.user = null;
          state.error = action.payload;
        },
        logout: (state) => {
          state.isAuthenticated = false;
          state.user = null;
          state.error = null;
        },
      },
})

export const {loginSuccess , loginFailure , logout} = slice.actions;

export default slice.reducer;