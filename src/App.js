import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='container'>
          <Navbar />
          <Hero />
          <Mission />
          <About />
      </div>
    );
  }
}

export default App;
