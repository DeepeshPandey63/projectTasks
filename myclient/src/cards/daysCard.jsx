import React from "react";

export const Day = ({ onClick }) => {
    return (
        <div className="shadow-day" onClick={onClick} style={{ cursor: 'pointer' }}>
            <h1>DATE:01-01-2025</h1>
        </div>
    );
}
