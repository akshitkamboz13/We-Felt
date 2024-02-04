import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ history }) => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  console.log(currentUser);

  const handleSignOut = () => {
    sessionStorage.removeItem("currentUser");
    window.location.href = "/login";
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
        <Link to="/login">Login</Link>
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
      <h2>Welcome, {currentUser.user.name}!</h2>
      <p>Email: {currentUser.user.email}</p>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
