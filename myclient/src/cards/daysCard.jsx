import React from "react";

export const Day = ({ onClick, dat }) => {
    return (
        <div className="shadow-day" onClick={onClick} style={{ cursor: 'pointer' }}>
            <h1>DATE: {dat}</h1>
        </div>
    );
};
