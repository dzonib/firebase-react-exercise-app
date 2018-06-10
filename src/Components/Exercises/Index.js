import React from 'react';
import { Grid } from '@material-ui/core';
import RightPane from './RightPane'
import LeftPane from './LeftPane'

const style = {
  Paper: {
    padding: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  }
}

const Exercises = props => (
  <Grid container spacing={8} justify="center">
    <Grid item sm>
     <LeftPane style={style}/>
    </Grid>

    <Grid item sm>
     <RightPane style={style}/>
    </Grid>

  </Grid>
);

export default Exercises;
