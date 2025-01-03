import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const AddnewTask = () => {
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState({
        date: '',
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData,
            [name]: value
        });
    };

    const handleAdd = (e) => {
        e.preventDefault();

        const formattedDate = new Date(taskData.date).toLocaleDateString("en-GB").split("/").reverse().join("");
        const requestBody = {
            date: formattedDate,
            title: taskData.title,
            description: taskData.description
        };

        fetch('http://localhost:3800/newTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            navigate('/');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toLocaleDateString("en-GB").split("/").reverse().join("");

    return (
        <div className="shadow-day" style={{ width: "80%" }}>
            <form onSubmit={handleAdd}>
                <label>Add Date:</label>
                <br />
                <input 
                    type="date" 
                    name="date" 
                    value={taskData.date} 
                    onChange={handleChange} 
                    placeholder={formattedCurrentDate} 
                />
                <br />
                <label>Add Title of the task :</label>
                <br />
                <input 
                    type="text" 
                    name="title" 
                    value={taskData.title} 
                    onChange={handleChange} 
                    placeholder="title" 
                />
                <br />
                <label>Add description of the task :</label>
                <br />
                <input 
                    type="text" 
                    name="description" 
                    value={taskData.description} 
                    onChange={handleChange} 
                    placeholder="description" 
                />
                <br />
                <button 
                    type="submit" 
                    style={{
                        backgroundColor: '#4CAF50', 
                        color: 'white', 
                        padding: '10px 20px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        fontSize: '16px', 
                        cursor: 'pointer', 
                        margin: '10px'
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    );
};
