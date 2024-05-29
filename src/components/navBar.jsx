import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

import './navBar.css'

// component : top navigation bar :
// containing : 1. Logo 
//              2. Login
//              3. My Profile
//              4. Logout
// Note : only generate Logo and Login if at landing page 
export default function NavBar ()  {
    const location = useLocation();
    const isLandingPage = location.pathname === '/';

    return (
    <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar">
            <div className="header-section">
                <AutoGraphIcon className="landing-logo" fontSize="large" />
                <Typography variant="h6" component={Link} to="/" className="landing-logo-title">
                    Contacts App
                </Typography>
            </div>

            <div className="header-section">
                {isLandingPage ? (
                    <Button
                    component={Link}
                    to="/contacts"
                    color="inherit"
                    startIcon={<LoginIcon />}
                    className='icon-btm'
                    >
                        <div className='icon-btm-content'>
                            Log in
                        </div>
                    </Button>
                ) : (
                    <>
                    <Button
                        color="inherit"
                        startIcon={<AccountCircleIcon />}
                        className='icon-btm'
                    >
                        <div className='icon-btm-content'>
                            My profile
                        </div>
                    </Button>
                    <Button
                        component={Link}
                        to="/"
                        color="inherit"
                        startIcon={<LogoutIcon />}
                        className='icon-btm'
                    >
                        <div className='icon-btm-content'>
                            logout
                        </div>
                    </Button>
                    </>
                )}
            </div>

        </Toolbar>

    </AppBar>

    )
}

