import React, { Component } from 'react';
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
import Exercises from './Components/Exercises/Index'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Exercises />
        <Footer />
      </div>
    );
  }
}

export default App;
