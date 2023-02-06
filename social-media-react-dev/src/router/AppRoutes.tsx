import React from 'react';
import { Route, Routes } from "react-router-dom";
import AdvancedSearch from '../components/advancedSearch/AdvancedSearch';
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

export const AppRoutes: React.FC<unknown> = () => (
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