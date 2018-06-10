import React from 'react';
import {Toolbar, AppBar, Typography} from '@material-ui/core'

const Header = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
