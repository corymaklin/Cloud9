import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='container'>
          <Navbar />
          <Hero />
      </div>
    );
  }
}

export default App;
