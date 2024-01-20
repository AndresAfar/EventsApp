import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { Events } from './pages/Events'
import { EventFormPage } from './pages/EventFormPage'
import { Home } from './pages/Home'
import './App.css'
import 'flowbite';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Event/create" element={<EventFormPage/>} />
      </Routes>
    </div>
  )
}

export default App