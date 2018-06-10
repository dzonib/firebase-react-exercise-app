import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';

const Footer = () => (
  <div>
    <Paper>
      <Tabs
        value={1}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  </div>
);

export default Footer;
