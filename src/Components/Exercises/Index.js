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

export default({
  exercises,
  category,
  passedId,
  exercise: {
    title = 'Welcome!',
    description = 'Please select an exercise from the left.',
    id,
    muscles
  }
}) => {

  return <Fragment>
    <Grid container spacing={16}>
      <Grid item sm>
        <Paper style={style.Paper}>
          {exercises.map(([groups, exercises]) => {

            return !category || groups === category
              ? <Fragment key={groups}>
                  <Typography
                    style={{
                    textTransform: "capitalize"
                  }}
                    variant="headline">
                    {groups}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({title, id}) => <ListItem button key={title} onClick={(e) => passedId(id)}>
                      <ListItemText primary={title}/>
                    </ListItem>)}
                  </List>
                </Fragment>
              : null
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={style.Paper}>
          <Typography align="center" variant="display1">{title}</Typography>
          <Typography align="center" variant="body2">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Fragment>
}
