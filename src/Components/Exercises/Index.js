import React, {Fragment} from 'react';
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

const style = {
  Paper: {
    height: 550,
    marginTop: 15,
    overflowY: 'auto'
  }
}

export default({exercises}) => <Fragment>
  <Grid container spacing={16}>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([groups, exercises]) => 
           <Fragment key={groups}>
            <Typography
              style={{
              textTransform: "capitalize"
            }}
              variant="headline">
              {groups}
            </Typography>
            <List component="ul">
            {exercises.map(({title}) => 
              <ListItem button key={title}>
                <ListItemText primary={title}/>
              </ListItem>
            )}
            </List>
          </Fragment>
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>
        <Typography align="center" variant="display1">
          Welcome!
        </Typography>
        <Typography align="center" variant="body2">
          Please select an exercise from the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
</Fragment>
