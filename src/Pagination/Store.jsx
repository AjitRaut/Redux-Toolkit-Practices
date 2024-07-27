// store.js
import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './Slice';

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});

export default store;
