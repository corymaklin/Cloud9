import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.contactFormRef = React.createRef();
    this.aboutSection = React.createRef();
    this.navigateToContactForm = this.navigateToContactForm.bind(this);
    this.navigateToAboutSection = this.navigateToAboutSection.bind(this);
  }

  navigateToContactForm() {
      window.scrollTo({
          top: this.contactFormRef.current.offsetTop - 20,
          behavior: 'smooth'
      });
  }

  navigateToAboutSection() {
      window.scrollTo({
          top: this.aboutSection.current.offsetTop - 20,
          behavior: 'smooth'
      });
  }

  render() {
    return (
      <div>
          <Navbar navigateToContactForm={ this.navigateToContactForm } />
          <Hero navigateToAboutSection={ this.navigateToAboutSection } />
          <Services />
          <About aboutSection={ this.aboutSection } />
          <Form contactFormRef={ this.contactFormRef } />
          <Footer />
      </div>
    );
  }
}

export default App;
