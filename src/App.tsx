import './App.css'

import { Routes, Route } from 'react-router-dom'

import Login from './pages/auth/Login'
import Home from './pages/operator/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Operator Routes */}
        <Route path="/operator/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
