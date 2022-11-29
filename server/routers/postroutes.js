import  express from "express";

const routes  = express.Router();

import {getPosts, createPost, editPost, getPost, deletePost } from '../controllers/posts.js'

routes.get('/', getPosts);
routes.post('/', createPost);
routes.patch('/', editPost);
routes.get('/:id', getPost);
routes.delete('/', deletePost);


export default routes;