import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBlogsListApi } from 'services/blogsApi';

export const getBlogsList = createAsyncThunk(
  'get/blogs-list',
  async (_, { rejectWithValue }) => {
    try {
      const blogs = await getBlogsListApi();
      return blogs;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      return !getState().blogs.length;
    },
  }
);
