import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../../remote/social-media-api/auth.api';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import '../login/Login.css'
import { FaUserCircle } from 'react-icons/fa';


const theme = createTheme();

const Login: React.FC<any> = (props:any) => {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const response = await apiLogin(`${data.get('email')}`, `${data.get('password')}`);
  //   if (response.status >= 200 && response.status < 300) {
  //     setUser(response.payload);
  //     navigate('/');
  //   }
  // };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const gatherInput = async (input: any) => {
    const response = await axios.post("localhost:5555/RevRater/auth/login", {email, password})
    //update
    if (input.target.name === "email") {
      setEmail(input.target.value)
    } else {
      setPassword(input.target.value)
    }
  }

  // login for success
  const login = async () => {
    const response = await axios.post("localhost:5555/RevRater/auth/login", { email, password })

    // if login successful
    if (response.status === 200){
      console.log(response.data)
      // props.setTargetUser(response.data);
      // props.setLoggedIn(true)  
      // navigate("/postfeed")
    }
  }

  return (
    <>
      <Navbar/>
      <div className="login-container container">
        <div className="text-container">
          <h1></h1>
          <h3>Please log in</h3>
          <div className="user-input-container">
            <FaUserCircle size="5em" />
            <div className="boxes">
              <div className="input-box">
                <input type="text" name="email" placeholder="email" onChange={gatherInput} />
              </div>
              <div className="input-box">
                <input type="password" name="password" placeholder="password" onChange={gatherInput} />
              </div>

            </div>
            <button className="login-button" onClick={login}>Login</button>
            <div className="signup-row">
            <Link href="signup">
              {"Don't have an account? Try Sign Up"}
            </Link>
            </div>
          </div>
          {/* <button className="login-button" onClick={reset}>Reset Password</button> */}
        </div>
      </div>
    </>

  );
}

export default Login