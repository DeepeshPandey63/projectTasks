import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3800/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // Navigate to the home page on successful login
            navigate('/');
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
    };

    return (
        <div>
            <header>
                <h1>Login Page</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <label>Email ID:</label>
                <input 
                    type='text' 
                    name='email' 
                    placeholder='user@email.com' 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                <label>Password:</label>
                <input 
                    type='password' 
                    name='password' 
                    placeholder='password' 
                    value={formData.password} 
                    onChange={handleChange} 
                />
                <button type='submit'>Login</button>
                <br />
                <a href="/signin">Don't have an account? Create one.</a>
            </form>
        </div>
    );
};

export default Loginpage;
