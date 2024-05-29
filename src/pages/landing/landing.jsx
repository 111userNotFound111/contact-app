import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import './landing.css'
import NavBar from '../../components/navBar.jsx'

// initial landing page 
// landing page contains : 1.  login portal 
//                         2. page covers 
function Landing () {
  const navigate = useNavigate();

  return (
    <div className="landing-container">

      <NavBar/>

      <div className='main-container'>
        <div className='side-container'>
        </div>

        <section className="content-section">
          <div className="landing-container-inner">
            <div className="text-center">
              <h2>Welcome to Home Page, please log in to Contact</h2>
              <br /><br />
            </div>
          </div>
        </section>

        <div className='side-container'>
        </div>

      </div>
    </div>
  )
}

export default Landing;