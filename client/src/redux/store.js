import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { createPostReducer, getPostsReducers, getPostReducer, updatePostReducer, deletePostReducer } from './reducers/postReducers';

const postReducer = combineReducers({
    createPost: createPostReducer.reducer,
    getSinglePost: getPostReducer.reducer,
    getAllPost: getPostsReducers.reducer,
    updatePost: updatePostReducer.reducer,
    deletePost: deletePostReducer.reducer,
});

const store = configureStore({postReducer})
export default store;