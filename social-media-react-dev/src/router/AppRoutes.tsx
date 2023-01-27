import React from 'react';
import { Route, Routes } from "react-router-dom";
import AdvancedSearch from '../components/advancedSearch/advancedSearch';
import Login from '../components/login/Login';
import { PostFeed } from '../components/post-feed/PostFeed';
import Register from '../components/register/Register';
import TrainerProfile from '../components/TrainerProfile/TrainerProfile';
import UserProfile from '../components/UserProfile/UserProfile';

export const AppRoutes: React.FC<unknown> = () => (
  <Routes>
    <Route path="/" element={<PostFeed />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/userprofile" element={<UserProfile />}/>
    <Route path="/trainerprofile" element={<TrainerProfile />}/>
    <Route path="/advancedsearch" element={<AdvancedSearch/>}/>
  </Routes>
)