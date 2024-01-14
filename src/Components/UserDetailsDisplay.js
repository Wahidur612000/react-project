// UserDetailsDisplay.js
import React from 'react';
import './Display.css';

function UserDetailsDisplay({ users }) {
  return (
    <div className="UserDetailsDisplay">
      <h2>User Details:</h2>
      {users.map((user, index) => (
        <div key={index}>
          <p>{user.name} ({user.age} Years old)</p>
        </div>
      ))}
    </div>
  );
}

export default UserDetailsDisplay;
