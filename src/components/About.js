import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <h1>Who We Are</h1>
            <div className='partners'>
                <img src={ require('../assets/profile.jpg') } />
                <div>
                    <h2>Cory Maklin</h2>
                    <p>Cory is a full stack developer by trade, an AWS Certified Solutions Architect and . In his free time he makes tutorials on technical concepts.</p>
                    <a href='https://www.youtube.com/channel/UCXewmpPZD3hw1uMSjXpk9Fw'><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    );
}

export default About;