import * as React from 'react';
import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { apiLogout } from '../../remote/social-media-api/auth.api';
import { Link, useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

export default function Navbar() {

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(<></>);
  const [tipTitle, setTipTitle] = useState('');


  useEffect(() => {
    if (user) {
      setLoggedIn(<LogoutIcon />);
      setTipTitle('Logout');
    } else {
      setLoggedIn(<LoginIcon />);
      setTipTitle('Login');
    }
  }, [user]);

  function handleAuth() {
    if (user) {
      apiLogout();
      setUser();
    } else {
      navigate('/login');
    }
  }

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar className="d-flex justify-content-around">
          <Typography variant="h6" component="div">
            Revature Social
          </Typography>
          <div className="d-flex justify-content-around">
            <div>
              <Link to="/">Main Feed</Link> |
              <Link to="/trainerprofile" >Trainers</Link> |
              <Link to="/createtrainer">Create Trainer | </Link>
              <Link to="/advancedsearch">Advanced Search</Link>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <h2><em>*Guest*</em></h2>
            </div>
            <Tooltip disableFocusListener disableTouchListener title={tipTitle}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => handleAuth()}
                color="inherit"
              >
                {loggedIn}
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
