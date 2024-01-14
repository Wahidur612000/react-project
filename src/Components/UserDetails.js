// UserDetails.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDetailsDisplay from './UserDetailsDisplay';
import InvalidInputPage from './InvalidInputPage';
import './UserDetails.css';

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  const navigateToInvalidInputPage = (errorMessage) => {
    setError(errorMessage);
    navigate('/invalid-input');
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === '' || enteredAge < 0) {
      navigateToInvalidInputPage(
        enteredName.trim() === ''
          ? 'Username must not be empty.'
          : 'Age must be greater than zero.'
      );
      return;
    }

    const newUser = {
      name: enteredName,
      age: enteredAge,
    };

    setUsers([...users, newUser]);
    setEnteredName('');
    setEnteredAge('');
    setSubmitted(true);
    setError('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>User Name</label>
            <input type='text' value={enteredName} onChange={nameHandler} />
          </div>
          <div>
            <label>Age (Years)</label>
            <input type='number' value={enteredAge} onChange={ageHandler} />
          </div>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>

      {error && (
        <InvalidInputPage errorMessage={error} />
      )}

      {submitted && !error && (
        <UserDetailsDisplay users={users} />
      )}
    </div>
  );
}

export default UserDetails;
