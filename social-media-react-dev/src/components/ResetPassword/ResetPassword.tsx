import React, { useState } from 'react'
import axios from 'axios'
import "./ResetPassword.css"
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import { User } from '../../interfaces/users'


  const ResetPassword: React.FC<any> = (props: any) => {
    const [userId, setUserId] = useState<User>(props.currentUser);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      /*if handleSubmit.data*/ 

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
  
      try {
        await updatePassword(userId.id, password);
        setPassword('');
        setConfirmPassword('');
        setError('');
      } catch (error) {
        setError('There was a problem changing the password');
      }
    };
  
    const updatePassword = async (userId: number, password: string) => {
      try {
        const response = await axios.put("http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/users/updatePassword",{ userId, password });
        console.log(response.data);

        navigate("/");
      navigate("/login");
      alert("Your Password has been changed")
      } catch (error) {
        console.error(error);
       }
    };
  
    return (
      <div className='Reset-container'>
      <form onSubmit={handleSubmit}>
        <div className='Reset-container'>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='Reset-container'>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
           </div>
       
        {error && <div>{error}</div>}
        <button type="submit" className='resetbutton'>Change Password</button>
      </form>
      </div>
    );
  };
  
  export default ResetPassword;
  