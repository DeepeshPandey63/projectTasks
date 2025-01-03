import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Task } from '../cards/taskCard'; // Adjust the path as necessary

const Datepage = () => {
    const { date } = useParams();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3800/${date}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setTasks(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [date]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>The date is: {date}</h1>
            {tasks.length > 0 ? (
                <div>
                    {tasks.map((task, index) => (
                        <Task key={index} title={task.taskHeading} description={task.taskDescription} />
                    ))}
                </div>
            ) : (
                <p>No tasks found for this date.</p>
            )}
        </div>
    );
};

export default Datepage;
