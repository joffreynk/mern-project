import { createSlice } from '@reduxjs/toolkit';

import { createPost, getPosts, getPost, updatePost, deletePost } from '../actioncreators/postActionCreators'

export const createPostReducer = createSlice({
  name:'createPost',
  initialStates: {
    loading: false,
    post: {}
  },
  reducers: {},
  extraReducers: {
    [createPost.fulfilled]: (state, action) => ({ ...action.payload, loading: false }),
    [createPost.pending]: (state, action) => ({ ...action.payload, loading: true }),
    [createPost.rejected]: (state, action) => ({ ...action.payload, loading: false })
  }
})

export const getPostsReducers = createSlice({
  name: 'allPosts',
  
})