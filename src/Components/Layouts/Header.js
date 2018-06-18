import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const style = {
  AppBar: {
    background: '#673AB7',
    color: 'white'
  }
}


const Header = () => (
  <AppBar position="static" color="inherit" style={style.AppBar}>
    <Toolbar>
      <Typography variant="title" color="inherit">
        Title
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
