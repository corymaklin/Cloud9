import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.contactFormRef = React.createRef();
    this.navigateToContactForm = this.navigateToContactForm.bind(this);
  }

  navigateToContactForm() {
      window.scrollTo({
          top: this.contactFormRef.current.offsetTop-20,
          behavior: "smooth"
      })
  }

  render() {
    return (
      <div>
          <Navbar navigateToContactForm={ this.navigateToContactForm } />
          <Hero />
          <div id='container'>
            <Mission />
            <About />
            <Form contactFormRef={ this.contactFormRef }/>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
