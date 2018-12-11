import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {

    render() {
        return (
            <div className='hero'>
                <h1>Take Advantage Of The Cloud</h1>
                <p>Cloud9 helps you migrate systems to and architect solutions on the cloud.</p>
                <button onClick={ this.props.navigateToAboutSection }>Find Out More</button>
            </div>
        );
    }
}

export default Hero;