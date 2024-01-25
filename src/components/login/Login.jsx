import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
    setError('');
  };

  const fetchData = async () => {
    try {
      const response = await fetch('../../assets/users.json'); // Replace with your API endpoint
      const data = await response.json();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      const storedUser = JSON.parse(localStorage.getItem('currentUser'));
      if (storedUser && storedUser.email === email && storedUser.pass === password) {
        console.log('Login successful');
        await fetchData();
        navigate('/home');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Signup logic
      let newUser = {
        name: name,
        email: email,
        pass: password,
      };

      localStorage.setItem('currentUser', JSON.stringify(newUser));
      console.log('Signup successful');
      await fetchData();
      navigate('/home');
    }
  };

  return (
    <div className='login-sign'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <label>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        )}
        <br />
        <label>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {isLogin ? "Don't have an account? Sign up here." : 'Already have an account? Login here.'}
      </p>
    </div>
  );
};

export default Login;
