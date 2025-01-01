import React from "react";
import { useNavigate } from 'react-router-dom';

export const AddnewTask = () => {
    const navigate = useNavigate();
    const handleAdd=()=>{
        navigate('/');
    }


    const currentDate = new Date();
  const formattedDate = currentDate
    .toLocaleDateString("en-GB") // "en-GB" locale formats date as DD/MM/YYYY
    .split("/").join("-");
  return (
    <div className="shadow-day" style={{ width: "80%" }}>
      <form>
        <label>Add Date:</label>
        <br />
        <input type="text" placeholder={formattedDate} />
        <br />
        
        <label >Add Title of the task :</label>
        <br />
        <input type="text" placeholder="title"/>
        <br />
        <label >Add description of the task :</label>
        <br />
        <input type="text" placeholder="description"/>
        <br />
        <button style={{
                    
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    padding: '10px 20px', 
                    border: 'none', 
                    borderRadius: '5px', 
                    fontSize: '16px', 
                    cursor: 'pointer',
                    margin:'10px'
                }} onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
};
