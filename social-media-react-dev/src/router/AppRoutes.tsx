import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateComments from '../components/Comments/CreateComments';
import ShowComments from '../components/Comments/ShowComments';
import CreateEmployee from '../components/CreateEmployee/CreateEmployee';
import GuestFeed from '../components/GuestFeed/GuestFeed';
// import Login from '../components/login/Login';
import CreatePostForm from '../components/post-feed/CreatePostForm';
import { PostFeed } from '../components/post-feed/PostFeed';
import Register from '../components/register/Register';
import SignUp from '../components/register/SignUp';
import EmployeeProfile from '../components/EmployeeProfile/EmployeeProfile';
import Employees from '../components/Employees/Employees';
import UserProfile from '../components/UserProfile/UserProfile';
import { User } from '../interfaces/users';
import AdvancedSearch from '../components/advancedSearch/advancedSearch';
import { Login } from '../components/login/Login';
import PublicUserProfile from '../components/UserProfile/PublicUserProfile';
import ResetPassword from '../components/ResetPassword/ResetPassword';






//changes made..
export const AppRoutes: React.FC<unknown> = (props:any) => {
  const [realUser, setUser] = useState(null)
  const [loggedIn, setLoggedStatus] = React.useState(false);
  
  
  return(


    // const [targetAccount, setTargetAccount] = React.useState<Ac>();
    // const [email, setEmail] = React.useState()
    // const [loggedIn, setLoggedStatus] = React.useState(false);
  <>
    <Routes>
      {/* <Route path="/" element={<PostFeed />} /> */}
      <Route path="/" element={<GuestFeed/>}/>
      <Route path="/login" element={<Login changeUser={setUser} changeStatus={setLoggedStatus}/>} />
      <Route path="/userprofile" element={<UserProfile currentUser={realUser}/>} />
      <Route path="/user/:id" element={<PublicUserProfile />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/employeeprofile/:id" element={<EmployeeProfile currentUser={realUser}/>} />
      <Route path="/createemployee" element={<CreateEmployee />} />
      <Route path="/createcomments" element={<CreateComments />} />
      <Route path="/showcomments" element={<ShowComments />} />
      <Route path="/createpostform" element={<CreatePostForm />} />
      <Route path="/postfeed" element={<PostFeed/>}/>
      {/* <Route path="/guest" element={<GuestFeed />} /> */}
      <Route path="/signup" element={<SignUp changeUser={setUser} changeStatus={setLoggedStatus}/>} />
      <Route path="/advancedsearch" element={<AdvancedSearch/>}/>
      <Route path="/ResetPassword" element={<ResetPassword currentUser={realUser}/>}/>
    </Routes>
  </>
)}