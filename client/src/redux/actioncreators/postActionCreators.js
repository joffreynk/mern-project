import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'http://localhost:3001/posts'

import { CREATE_POST, GET_POST, GET_POSTS, DELETE_POST, UPDATE_POST } from "../actions/PostActions";

const createPost = createAsyncThunk(CREATE_POST, async (params) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  };
  const post = await fetch(URL, options);
  return post.json();
})
const getPosts = createAsyncThunk(GET_POSTS, async () => {
  const posts = await fetch(URL);
  return posts.json();
})


const updatePost = createAsyncThunk(UPDATE_POST, async (params) => {
  const options = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(params),
  };
  const updatedpost = await fetch(URL, options)
  return updatedPost.json();
} )

const getpost = createAsyncThunk(GET_POST, async (param) => {
  const option = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(param)
  }
  const getsinglepost = await fetch(URL, option)
  return getsinglepost.json();
})

const deletepost = createAsyncThunk(DELETE_POST, async (param) => {
  const option = {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(param)
  }
  const getsinglepost = await fetch(URL, option)
  return getsinglepost.json();
})