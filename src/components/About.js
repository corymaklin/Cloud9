import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div ref={ this.props.aboutSection } className='about'>
                <h1>Meet The Team</h1>
                <div className='partners'>
                    <img src={ require('../assets/profile.jpg') } />
                    <div className='bio'>
                        <h1>Cory Maklin</h1>
                        <p>Cory is a full stack developer by trade, an AWS Certified Solutions Architect and teacher. In his free time he makes tutorials on technical concepts such as React, Serverless and Machine Learning.</p>
                        <a href='https://www.youtube.com/channel/UCXewmpPZD3hw1uMSjXpk9Fw'><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;