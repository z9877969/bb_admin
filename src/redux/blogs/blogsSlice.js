import { createSlice } from '@reduxjs/toolkit';
import { getBlogsList } from './blogsOperations';

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: [],
  extraReducers: (builder) =>
    builder.addCase(getBlogsList.fulfilled, (_, { payload }) => {
      return payload;
    }),
});

export default blogsSlice.reducer;
