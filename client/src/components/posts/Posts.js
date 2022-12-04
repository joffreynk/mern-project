import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actioncreators/postActionCreators'
import Post from './post/Post'

function Posts() {
  const dispatch = useDispatch()

  const posts = useSelector((store)=>store.getAllPost)
  console.log(posts);
  useEffect(()=>{
    dispatch(getPosts())
  }, [dispatch])
  return (
    <>
    
    {posts.length
    ? 
    <Post />
    :
    // <div className="d-flex justify-content-center">
    //   <div className="spinner-border text-info" role="status">
    //   </div>
    // </div>
    <span className="loader"></span>
    }
    
    </>
  )
}

export default Posts