import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Homepage } from './component/pages/home'
import { Codingpage } from './component/pages/codingpage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cooding-questions-with-answers/' element={<Codingpage />} />
      </Routes>
    </Router>
  )
}

export default App
