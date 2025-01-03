import React from "react";

export const Task = ({ title, description }) => {
    return (
        <div className="shadow-day">
            <h1>Task Title: {title}</h1>
            {description && <p>Task Description: {description}</p>}
        </div>
    );
};
