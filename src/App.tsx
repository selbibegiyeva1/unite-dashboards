import './App.css'

import { Routes, Route } from 'react-router-dom'

import Login from './pages/auth/Login'

import Home from './pages/operator/Home'
import Product from './pages/operator/Product'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Operator Routes */}
        <Route path="/operator/home" element={<Home />} />
        <Route path="/operator/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
