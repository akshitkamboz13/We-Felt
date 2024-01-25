import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import CreatePost from './components/createPost/CreatePost';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      
        <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/create-post" element={<CreatePost />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
