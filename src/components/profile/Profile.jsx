import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ history }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    history.push("/login");
  };

  if (!currentUser) {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Error: User information not found. Please log in.</h2>
        <a href="/Login">Login</a>
      </div>
    );
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Welcome, {currentUser.name}!</h2>
      <p>Email: {currentUser.email}</p>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
