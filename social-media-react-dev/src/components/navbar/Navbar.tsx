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
import '../navbar/Navbar.css'
import { FaUserCircle } from 'react-icons/fa';
import logo from '../navbar/logo.png'

const Navbar: React.FC<any> = (props: any) => {

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(<></>);
  const [tipTitle, setTipTitle] = useState('');


  // access login/signup components
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
  // change guest name
  // var status = false;
  // var status = true;
  // React.useEffect(()=>{
  //   if(status != true){
  //     var element: HTMLElement = document.getElementById('userStatus') as HTMLElement; 
  //     element.innerHTML = `GUEST`;
  //   } else {
  //     const element: HTMLElement = document.getElementById('userStatus') as HTMLElement;
  //     element.innerHTML = `Logged in`;
  //   }
  // })


  //   React.useEffect(() => {
  //     if (status != true) {
  //         console.log('not logged in')
  //     } else {
  //         const element: HTMLElement = document.getElementById('stat') as HTMLElement
  //         element.innerHTML = `Welcome to Revature Banking, ${props.targetUser.firstName}`
  //     }
  // })



  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar className="d-flex justify-content-around nav-container">
            {/* <Typography variant="h6" component="div">
            RevRater
          </Typography> */}
            <Link to="/">
              <img alt='RevRater logo' src="fatimat_revrater.png" className="img-fluid logo" id="revRater" />
            </Link>
            <div className="d-block">
              <div className="d-flex justify-content-around">
                <Link className="nav-heads" to="/postfeed">Main Feed</Link> |
                <Link className="nav-heads" to="/employees" >Employees</Link> |
                <Link className="nav-heads" to="/createemployee">Create Employees </Link> |
                <Link className="nav-heads" to="/advancedsearch">Advanced Search</Link>
              </div>

            </div>
            <div className="d-flex">
              <div>
                <Link to="/userprofile">
                  {/* <h3 id="userStatus"><em>props pass here</em></h3> */}
                  <FaUserCircle size="3em" className="user-profile-icon" />

                </Link>
              </div>
              {/* <button className="darkmode-switch" onClick={()=>setDarkMode(!darkMode)}></button> */}
              {/* <button onClick={turnDarkModeOn}>on</button>
            <button onClick={turnDarkModeOff}>off</button> */}
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
    </>
  );
}

export default Navbar 