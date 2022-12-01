import { createAsyncThunk } from '@reduxjs/toolkit'
import { CREATE_POST, GET_POST, GET_POSTS, DELETE_POST, UPDATE_POST } from "../actions/PostActions";

const URL = 'http://localhost:3001/posts'


export const createPost = createAsyncThunk(CREATE_POST, async (params) => {
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

export const getPosts = createAsyncThunk(GET_POSTS, async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  const posts = await fetch(URL, options);
  return posts.json();
})


export const updatePost = createAsyncThunk(UPDATE_POST, async (params) => {
  const options = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(params),
  };
  const updatedpost = await fetch(URL, options);
  return updatedpost.json();
} )

export const getPost = createAsyncThunk(GET_POST, async (param) => {
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

export const deletePost = createAsyncThunk(DELETE_POST, async (param) => {
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