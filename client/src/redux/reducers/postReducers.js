import { createSlice } from '@reduxjs/toolkit'

import { createPost, getPosts, getPost, updatePost, deletePost } from '../actioncreators/postActionCreators'

export const createPostReducer = createSlice({
  name:'createPost',
  initialState: {
    loading: false,
    post: {}
  },
  reducer: {},
  extraReducers: {
    [createPost.fulfilled]: (state, action) => ({ ...state, ...action.payload, loading: false }),
    [createPost.pending]: (state, action) => ({ ...state,...action.payload, loading: true }),
    [createPost.rejected]: (state, action) => ({ ...state, ...action.payload, loading: false })
  }
})

export const getPostsReducers = createSlice({
  name: 'allPosts',
  initialState: {
    loading: false,
    allPosts: [],
  },
  reducer: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => ({...state, allPosts: [...action.payload], loading: false }),
    [getPosts.pending]: (state, action) => ({ ...state,...action.payload, loading: true }),
    [getPosts.rejected]: (state, action) => ({ ...state, ...action.payload, loading: false })
  }
})

export const getPostReducer = createSlice({
  name: 'singlePost',
  initialState: {
    loading: false,
    post: {},
  },
  reducer: {},
  extraReducers: {
    [getPost.fulfilled]: (state, action) => ({ ...state, ...action.payload, loading: false }),
    [getPost.pending]: (state, action) => ({ ...state,...action.payload, loading: true }),
    [getPost.rejected]: (state, action) => ({ ...state, ...action.payload, loading: false })
  }
});

export const updatePostReducer = createSlice({
  name:'updatePost',
  initialState: {
    loading: false,
    post: {},
  },
  reducer: {},
  extraReducers: {
    [updatePost.fulfilled]: (state, action) => ({ ...state, ...action.payload, loading: false }),
    [updatePost.pending]: (state, action) => ({ ...state,...action.payload, loading: true }),
    [updatePost.rejected]: (state, action) => ({ ...state, ...action.payload, loading: false })
  }
})

export const deletePostReducer = createSlice({
  name:'deletePost',
  initialState: {
    loading: false,
    post: {},
  },
  reducer: {},
  extraReducers: {
    [deletePost.fulfilled]: (state, action) => ({ ...state, ...action.payload, loading: false }),
    [deletePost.pending]: (state, action) => ({ ...state,...action.payload, loading: true }),
    [deletePost.rejected]: (state, action) => ({ ...state, ...action.payload, loading: false })
  }
})