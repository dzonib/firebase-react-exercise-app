import React, {Fragment} from 'react';
import {Paper, Tab, Tabs} from '@material-ui/core'

export default({muscles, onSelect, category}) => {

  const index = category ? muscles.findIndex( muscle => muscle === category) +1 : 0

  const passChange = (e, passedValue) => {
    onSelect(passedValue === 0 ? '' : muscles[passedValue -1])
  }


  return <Fragment>
    <Paper >
      <Tabs
        centered
        value={index}
        indicatorColor="primary"
        textColor="primary"
        onChange={passChange}
        >
        <Tab label="All"/> {muscles.map(muscle => <Tab key={muscle} label={muscle}/>)}
      </Tabs>
    </Paper>
  </Fragment>

}
