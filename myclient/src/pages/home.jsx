import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Day } from '../cards/daysCard';

const Homepage = () => {
    const navigate = useNavigate();
    
    const navigateToNewTask = () => {
        navigate('/newTask');
    }

    const navigateToTheDate = () => {
        navigate(`/${Date.now()}`);
    }

    return (
        <div>
            <h1>home page</h1>
            <div>
                <Day onClick={navigateToTheDate} />
                <Day onClick={navigateToTheDate} />
                <Day onClick={navigateToTheDate} />
                <Day onClick={navigateToTheDate} />
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
