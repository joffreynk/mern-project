import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import { createPost } from '../../redux/actioncreators/postActionCreators'

function Form() {

  const dispatch = useDispatch();


  const [postData, setPostData] = useState({
    title:'',
    creator: '',
    tags: '',
    message: '',
    selectedFile: ''
  })
  // console.log(postData);
  const handleSumit = (e)=>{
    e.preventDefault()
    dispatch(createPost(postData));
    console.log('Data sent');
  }


  const clear = () => {
    setPostData({
      title:'',
      creator: '',
      tags: '',
      message: '',
      selectedFile: ''
    })
    console.log('console cleared successfully');
  }
  return (
    <>
      <h2>Add data for Post</h2>
      <form onSubmit={handleSumit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})} type="text" className="form-control" id="title" placeholder="enter a post title here"/>
      </div>
      <div className="mb-3">
        <label htmlFor="creator" className="form-label">Creator</label>
        <input value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})} type="text" className="form-control" id="creator" placeholder="enter a post Author"/>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})} type="text" className="form-control" id="tags" placeholder="enter a post tags"/>
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Example textarea</label>
        <textarea value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}  className="form-control" id="message" rows="3"></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="creator" className="form-label">memory Picture </label>
        <div className='form-file'>
        <FileBase type='file' multiple={false} onDone={(base64)=>setPostData({...postData, selectedFile: base64})} />
        </div>
      </div>
      <div className="m-3">
        <button type='submit' className='btn btn-success p-2 mx-4'>Add Post</button>
        <button type='button' className='btn btn-warning p-2' onClick={clear}>clear Form</button>
      </div>
    </form>
    </>
  )
}

export default Form