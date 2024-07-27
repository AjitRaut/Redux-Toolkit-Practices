import { createSlice } from "@reduxjs/toolkit";
import { asyncThunkCreator } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPaginatedData = createAsyncThunk(
    'pagination/fetchPaginatedData',
    async (page, thunkAPI) => {
      const response = await axios.get(`https://api.example.com/data?page=${page}`);
      return response.data;
    }
  );

  const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
      data: [],
      currentPage: 1,
      totalPages: 0,
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