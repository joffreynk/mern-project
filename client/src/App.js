import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CREATE_POST,  GET_POSTS } from '../src/redux/actions/PostActions';
// import { CREATE_POST, GET_POST, GET_POSTS, DELETE_POST, UPDATE_POST } from '../src/redux/actions/PostActions'
import { createPost, getPosts } from '../src/redux/actioncreators/postActionCreators'
import './index.css'
// import { Container, Grow, AppBar, Grid, Typography } from '@mui/material';

import memory from './images/memories.png';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';

function App() {

  const dispatch = useDispatch()

  const data = useSelector((store)=>store.getAllPost)
  console.log(data);
  useEffect(()=>{
    dispatch(getPosts(GET_POSTS))
  }, [dispatch])

  return (
    <div className='lg container'>
      <div className="d-flex justify-content-center" position='static' color='inherit'>
        <h2 className=" text-success mx-3" >Memories</h2>
        <img className="logo mx-3" src={memory} alt='memories' width="50px" height='50px'/>
      </div>

      <div >
        <div className='container'>
          <div className='' >
            <div className='xs-12 sm-7'>
              <Posts />
            </div>
            <div className='xs-12 sm-4'>
              <Form />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App