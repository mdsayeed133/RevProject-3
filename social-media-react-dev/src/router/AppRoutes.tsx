import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateComments from '../components/Comments/CreateComments';
import ShowComments from '../components/Comments/ShowComments';
import CreateEmployee from '../components/CreateEmployee/CreateEmployee';
import GuestFeed from '../components/GuestFeed/GuestFeed';
import Login from '../components/login/Login';
import CreatePostForm from '../components/post-feed/CreatePostForm';
import { PostFeed } from '../components/post-feed/PostFeed';
import Register from '../components/register/Register';
import SignUp from '../components/register/SignUp';
import EmployeeProfile from '../components/EmployeeProfile/EmployeeProfile';
import Employees from '../components/Employees/Employees';
import UserProfile from '../components/UserProfile/UserProfile';
import { User } from '../interfaces/users';
import AdvancedSearch from '../components/advancedSearch/advancedSearch';






//changes made..
export const AppRoutes: React.FC<unknown> = () => (


    // const [targetAccount, setTargetAccount] = React.useState<Ac>();
    // const [email, setEmail] = React.useState()
    // const [loggedIn, setLoggedStatus] = React.useState(false);
  <>
    <Routes>
      <Route path="/" element={<PostFeed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/employeeprofile" element={<EmployeeProfile />} />
      <Route path="/createemployee" element={<CreateEmployee />} />
      <Route path="/createcomments" element={<CreateComments />} />
      <Route path="/showcomments" element={<ShowComments />} />
      <Route path="/createpostform" element={<CreatePostForm />} />
      <Route path="/guest" element={<GuestFeed />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/advancedsearch" element={<AdvancedSearch/>}/>
    </Routes>
  </>
)