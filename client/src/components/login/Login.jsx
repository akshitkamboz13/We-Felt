import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/users"); // Replace with your backend API endpoint
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        isLogin
          ? "http://localhost:3000/users/login"
          : "http://localhost:3000/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        const userData = await response.json();

        // Store user information in sessionStorage or localStorage
        sessionStorage.setItem("currentUser", JSON.stringify(userData));

        console.log(`${isLogin ? "Login" : "Signup"} successful`);
        await fetchData();
        window.location.href = "/"; // Navigate to the root page
      } else {
        const data = await response.json();
        setError(data.message || `${isLogin ? "Login" : "Signup"} failed`);
      }
    } catch (error) {
      console.error(`Error during ${isLogin ? "login" : "signup"}:`, error);
      setError("Internal Server Error");
    }
  };

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
    setError("");
  };

  return (
    <div className="login-sign">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        )}
        <br />
        <label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <p onClick={handleToggle} style={{ cursor: "pointer" }}>
        {isLogin
          ? "Don't have an account? Sign up here."
          : "Already have an account? Login here."}
      </p>
    </div>
  );
};

export default Login;
