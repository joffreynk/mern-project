import React from 'react'

import { Container, Grow, AppBar, Grid, Typography } from '@material-ui/core';

import memory from './images/memories.png';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import makeStyles from './styles';

function App() {
  const classes = makeStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memory} alt='memories' height='60'/>
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