import React, { Component } from 'react';
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <p> Hi React </p>
        <Footer />
      </div>
    );
  }
}

export default App;
