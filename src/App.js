import React, {Component, Fragment} from 'react';
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
import Exercises from './Components/Exercises/Index'
import {muscles, exercises} from './store'

export default class App extends Component {

  state = {
    category: ''
  }


  reduceExercises = () =>
    Object.entries(exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise;

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

      return exercises
    }, {}))


  handleFooterChange = category => {
    this.setState({category})
  }



  render() {
    const exercises = this.reduceExercises();
    return (
      <Fragment>
        <Header/>
        <Exercises exercises={exercises}/>
        <Footer  category={this.state.category} muscles={muscles} onSelect={this.handleFooterChange}/>
      </Fragment>
    );
  }
}
