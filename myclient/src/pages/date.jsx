import React from'react';
import { useParams } from 'react-router-dom';
const Datepage=()=>
{
    const { date } = useParams();
    return (
        <div>
            <h1>The date is: {date}</h1>
        </div>
    )
}

export default Datepage;
