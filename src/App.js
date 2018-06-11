import React, { Component } from 'react';
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
import Exercises from './Components/Exercises/Index'
import {muscles, exercises} from './store'


class App extends Component {

  state = {
    exercises
  }

  getExerciseByMuscleGroup() {
    return this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise;

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

      return exercises
      
    }, {})
  }

  render() {
    console.log(this.getExerciseByMuscleGroup())
    
    return (
      <div>
        <Header />
        <Exercises exercises={exercises}/>
        <Footer muscles={muscles}/>
      </div>
    );
  }
}

export default App;
