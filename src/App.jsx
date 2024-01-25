import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      
        <Routes>
        <Route path="/home" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
