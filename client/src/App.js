import React from 'react'


import './index.css'

import memory from './images/memories.png';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';

function App() {

  return (
    <div className='lg container'>
      <div className="d-flex justify-content-center" position='static' color='inherit'>
        <h2 className=" text-success mx-3" >Memories</h2>
        <img className="logo mx-3" src={memory} alt='memories' width="50px" height='50px'/>
      </div>

      <div className='row'>
          <div className='col-xs-12 col-sm-7 mr-5'>
            <Posts />
          </div>
          <div className='col-xs-12 col-sm-5 ml-5'>
            <Form />
          </div>
      </div>
    </div>
  )
}

export default App