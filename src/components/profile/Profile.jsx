import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ history }) => {
  // Retrieve user information from localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Function to handle sign out
  const handleSignOut = () => {
    // Remove currentUser from localStorage
    localStorage.removeItem('currentUser');
    // Redirect to the login page or any other desired route
    history.push('/login');
  };

  // Check if user information is available
  if (!currentUser) {
    return (
      <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h2>Error: User information not found. Please log in.</h2>
        <a href="/Login">
              Login
            </a>
      </div>
    );
  }

  return (
    <div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h2>Welcome, {currentUser.name}!</h2>
      <p>Email: {currentUser.email}</p>
      {/* Add more details or functionality as needed */}
      
      {/* Sign Out button */}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
