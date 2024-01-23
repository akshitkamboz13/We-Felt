import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Router, RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App
