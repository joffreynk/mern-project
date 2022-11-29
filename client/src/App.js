import React from 'react'

import { Container, Grow, AppBar, Grid, Typography } from '@material-ui/core';

import memory from './images/memories.png'
import Posts from './components/posts/Posts'
import Form from './components/form/Form'

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src={memory} alt='memories' height='300'/>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-betwee" alignItems='scretch' spacing={3}>
            <Grid xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  )
}

export default App