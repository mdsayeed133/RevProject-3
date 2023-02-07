import { IconButton, Tooltip } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user.context';
import { apiLogout } from '../../remote/social-media-api/auth.api';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

import '../navbar/Navbar.css'

const NewNavbar: React.FC<any> = (props: any) => {

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

    // user status
    var status = false;
    // var status = true;
    React.useEffect(() => {
        if (status != true) {
            var element: HTMLElement = document.getElementById('userStatus') as HTMLElement;
            element.innerHTML = `GUEST`;
        } else {
            const element: HTMLElement = document.getElementById('userStatus') as HTMLElement;
            element.innerHTML = `Logged in`;
        }
    })

    // working on darkmode.... fun
    const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
    const storedDarkMode = localStorage.getItem("DARK_MODE");
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode])
    return (
        <>
            <section className="newnavbar container d-flex justify-content-around">
                <div className="main-logo">
                    <h3>RevRater</h3>
                </div>
                <div className="advanced-search-bar">
                    <input type="search" name="searchbox" id="searchbox" placeholder="enter employee name here" className="nav-search" />
                </div>
                <div className="status-and-switch d-flex jusitify-content-around">
                    <div className="status">
                    <Link to="/login">login |</Link>
                    <Link to="/signup">sign up |</Link>
                    <Link to="/userprofile"><p id="userStatus"></p></Link>
                </div>
                    <button className="darkmode-switch" onClick={()=>setDarkMode(!darkMode)}></button>
                    <div className="log-button">
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

                </div>
            </section>
        </>
    )
}

export default NewNavbar