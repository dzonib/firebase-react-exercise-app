import React, {Fragment} from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import AddExercise from '../Exercises/Dialogs/Create'

const style = {
  AppBar: {
    background: '#673AB7',
    color: 'white'
  }
}

const Header = ({muscles}) => {
  return <Fragment>
    <AppBar position="static" color="inherit" style={style.AppBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" style={{flex: 1}}>
          Exercise App
        </Typography>
        <AddExercise muscles={muscles}/>

      </Toolbar>
    </AppBar>
  </Fragment>
};

export default Header;
