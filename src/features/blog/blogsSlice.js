// src/features/blog/blogsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { BLOG } from '../../app/assets/shared/BLOGPOSTS';  // Adjust path to BLOGPOSTS.js

const initialState = {
  blogs: BLOG,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    // Add any reducers specific to blogs here if needed
  },
});

export const selectAllBlogs = (state) => state.blogs.blogs;

export default blogsSlice.reducer;
