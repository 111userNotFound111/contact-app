import React from 'react'
import { useNavigate } from 'react-router-dom'
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
              <h1>Welcome To Contact App, Please Login </h1>
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