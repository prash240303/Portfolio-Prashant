import { useState } from 'react'
import Navbar from "./components/Navbar"
import './App.css'
import '../src/Styles/Navbar.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blogs from './pages/Blogs'
import Resume from './pages/Resume'
import Work from './pages/Work'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='work' element={<Work />} />
          </Route>
          <Route path='resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
