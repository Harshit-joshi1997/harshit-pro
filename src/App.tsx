import './App.css'

import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import { LoginForm } from './components/login-form'

function App() {
 

  return (
    <>
    
    <Routes>
            <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<LoginForm />} />
          </Routes>
      </>
    
  )
}

export default App
