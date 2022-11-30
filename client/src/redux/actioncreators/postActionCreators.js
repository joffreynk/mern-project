import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'http://localhost:3001/posts'

import { CREATE_POST, GET_POST, GET_POSTS, DELETE_POST, UPDATE_POST } from "../actions/PostActions";

const createPost = createAsyncThunk(CREATE_POST, async (params) => {
  
  const post = await fetch(URL, params)
})


