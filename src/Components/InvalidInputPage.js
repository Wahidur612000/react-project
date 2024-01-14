import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Invalid.css';

function InvalidInputPage({ errorMessage }) {
  const navigate = useNavigate();

  const handleOkayClick = () => {
    navigate('/'); 
  }

  return (
    <div>
      <h2>Invalid Input:</h2>
      <p>{errorMessage}</p>
      <button onClick={handleOkayClick}>Okay</button>
    </div>
  );
}

export default InvalidInputPage;
