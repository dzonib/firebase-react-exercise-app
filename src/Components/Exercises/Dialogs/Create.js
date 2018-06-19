import React, {Fragment, Component} from 'react';


import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default class CreateExercise extends Component {

  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    },
  }

  handleToggle = () => {
    this.setState(() => ({
      open: !this.state.open
    }))
  }

  handleInput = name => ({target: {
      value
    }}) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    })
  }

  render() {
    const {
      open,
      exercise: {
        title,
        description,
        muscles
      }
    } = this.state

   const {muscles: categories} = this.props;

    return (
      <Fragment>
        <Button variant="fab" mini aria-label="add" onClick={this.handleToggle}>
          <AddIcon/>
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">Add Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <form>
              <TextField
                autoFocus
                label="Exercise Title"
                onChange={this.handleInput('title')}
                margin="normal"
                value={title}
                fullWidth/>
              <TextField
                multiline
                rows="2"
                label="Exercise Description"
                onChange={this.handleInput('description')}
                margin="normal"
                value={description}
                fullWidth/>
              <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">Select muscles group for exercise</InputLabel>
                <Select
                  value={muscles}
                  onChange={this.handleInput('muscles')}
                 >
                 {categories.map( muscle =>
                   <MenuItem value={muscle} key={muscle}>{muscle}</MenuItem>
                 )}
                </Select>
              </FormControl>
            </form>

          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Add Exercise
            </Button>

          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}