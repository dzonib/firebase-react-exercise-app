import React, {Component, Fragment} from 'react';
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
import Exercises from './Components/Exercises/Index'
import {muscles, exercises} from './store'

export default class App extends Component {

  state = {
    category: '',
    exercise: {}
  }

  reduceExercises = () => Object.entries(exercises.reduce((exercises, exercise) => {
    const {muscles} = exercise;

    exercises[muscles] = exercises[muscles]
      ? [
        ...exercises[muscles],
        exercise
      ]
      : [exercise]

    return exercises
  }, {}))

  handleFooterChange = category => {
    this.setState({category})
  }

  getExerciseWithIdHandler = id => {
    const exercise = exercises.find(exercise => exercise.id === id);

    this.setState(() => ({exercise}))
  }

  render() {
    const exercises = this.reduceExercises();
    return (
      <Fragment>
        <Header muscles={muscles}/>
        <Exercises
          exercise={this.state.exercise}
          passedId={this.getExerciseWithIdHandler}
          exercises={exercises}
          category={this.state.category}/>
        <Footer
          category={this.state.category}
          muscles={muscles}
          onSelect={this.handleFooterChange}/>
      </Fragment>
    );
  }
}
