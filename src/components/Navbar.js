import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <nav>
                <a id='logo' href='#'><i className="fas fa-cloud"></i>Cloud9</a>
                <a onClick={ this.props.navigateToContactForm } href='#'>Contact</a>
                <a href='https://medium.com/@corymaklin'>Blog</a>
            </nav>
        );
    }
}

export default Navbar;