import React, { useState } from 'react';

const Signinpage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3800/signin', {
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
            // Handle successful response
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
    };

    return (
        <div>
            <header>
                <h1>Sign in Page</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <label> User Name:</label>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='username' 
                    value={formData.username} 
                    onChange={handleChange} 
                />
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
                <br/>
                <label>Gender:</label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="Male" 
                        id="male" 
                        checked={formData.gender === 'Male'} 
                        onChange={handleChange} 
                    />
                    Male
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="Female" 
                        id="female" 
                        checked={formData.gender === 'Female'} 
                        onChange={handleChange} 
                    />
                    Female
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="Other" 
                        id="other" 
                        checked={formData.gender === 'Other'} 
                        onChange={handleChange} 
                    />
                    Other
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="Prefer Not to Say" 
                        id="preferNotToSay" 
                        checked={formData.gender === 'Prefer Not to Say'} 
                        onChange={handleChange} 
                    />
                    Prefer Not to Say
                </label>
                <br/>
                <button type='submit'>Sign In</button>
                <br />
                <a href="/login">Have Account Already? Login.</a>
            </form>
        </div>
    );
}

export default Signinpage;
