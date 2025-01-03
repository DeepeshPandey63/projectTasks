import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Day } from '../cards/daysCard';

const Homepage = () => {
    const navigate = useNavigate();
    
    const [taskDates, setTaskDates] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => { 
        fetch('http://localhost:3800/')
            .then(response => { 
                if (!response.ok) { 
                    throw new Error('Network response was not ok'); 
                } 
                return response.json(); 
            })
            .then(data => { 
                setTaskDates(data); 
                setLoading(false); 
            }) 
            .catch(error => { 
                setError(error); 
                setLoading(false); 
            }); 
    }, []);

    if (loading) { 
        return <div>Loading...</div>; 
    }
    
    if (error) { 
        return <div>Error: {error.message}</div>; 
    }

    const navigateToNewTask = () => {
        navigate('/newTask');
    }

    const navigateToTheDate = (date) => {
        navigate(`/${date}`);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                {taskDates.map((date, index) => (
                    <Day onClick={() => navigateToTheDate(date)} dat={date}/>
                ))}
            </div>
            <button 
                style={{
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    padding: '10px 20px', 
                    border: 'none', 
                    borderRadius: '5px', 
                    fontSize: '16px', 
                    cursor: 'pointer'
                }}
                onClick={navigateToNewTask}
            >
                Add New Task
            </button>
        </div>
    );
}

export default Homepage;
