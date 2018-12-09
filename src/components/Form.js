import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e) {
        const { email, name, message } = this.state;

        e.preventDefault();
    
        const API_URL = 'https://9lwd0zdduj.execute-api.us-east-1.amazonaws.com/prod/contact';
        
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                message: message
            })
        });

        this.setState({
            email: '',
            name: '',
            message: ''
        });

        e.target.reset();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div ref={ this.props.contactFormRef } className='joe'>
                <h1>Get In Touch</h1>
                <p>Interested in hiring one of our partners? Send us a quick message down below.</p>
                <form className='emailForm' onSubmit={ this.handleSubmit }>
                    <label>Name *</label>
                    <input placeholder='Jane Doe' type='text' name='name' onChange={ this.handleChange }/>
                    <label>Email *</label>
                    <input placeholder='janedoe@gmail.com' type='text' name='email' onChange={ this.handleChange }/>
                    <label>Message *</label>
                    <textarea name='message' onChange={ this.handleChange } />
                    <button className='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;