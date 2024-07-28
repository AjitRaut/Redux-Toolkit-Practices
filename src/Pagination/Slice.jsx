// src/features/pagination/paginationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPaginatedData = createAsyncThunk(
  'pagination/fetchPaginatedData',
  async (page) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const totalItems = response.headers.get('x-total-count');
    const data = await response.json();
    return { data, totalPages: Math.ceil(totalItems / 10) };
  }
);

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    data: [],
    currentPage: 1,
    totalPages: 1,
    status: 'idle',
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaginatedData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPaginatedData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPaginatedData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = paginationSlice.actions;
export default paginationSlice.reducer;
