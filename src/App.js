import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react"
import Landing from './pages/landing/landing.jsx'
import Contacts from './pages/contacts/contacts.jsx'
import { Navigate } from 'react-router-dom'

// Router 
export default function App() {
  const [token, setToken] = React.useState(null)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}
