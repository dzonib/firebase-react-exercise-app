import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';

const Footer = ({muscles}) => {

  return <div>
    <Paper>
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label='All' />

      {muscles.map( (muscle, id) =>
        <Tab key={id} label={muscle} />
      )}
        {/* <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" /> */}
      </Tabs>
    </Paper>
  </div>

}
export default Footer;
