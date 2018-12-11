import React from 'react';
import './Mission.css';

const Mission = () => {
    return (
        <div className='mission'>
            <div>
                <h2>Teaching</h2>
                <p>We'll help you and your team get up to speed on basics to cutting edge development techniques.</p>             
            </div>
            <div>
                <h2>Contracting</h2>
                <p>We'll develop secure fault tolerant applications that are easy to maintain and scale.</p>
            </div>
            <div>
                <h2>Consulting</h2>
                <p>We'll figure out how much you stand to save by migrating over to the cloud. We'll help you pick and architect the best solution that meets your needs.</p>
            </div>
        </div>
    );
}

export default Mission;