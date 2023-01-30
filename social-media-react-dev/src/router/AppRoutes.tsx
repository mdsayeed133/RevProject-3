import React from 'react';
import { Route, Routes } from "react-router-dom";
import AdvancedSearch from '../components/advancedSearch/advancedSearch';
import CreateComments from '../components/Comments/CreateComments';
import ShowComments from '../components/Comments/ShowComments';
import CreateTrainer from '../components/CreateTrainer/CreateTrainer';
import Login from '../components/login/Login';
import { PostFeed } from '../components/post-feed/PostFeed';
import Register from '../components/register/Register';
import TrainerProfile from '../components/TrainerProfile/TrainerProfile';
import Trainers from '../components/Trainers/Trainers';
import UserProfile from '../components/UserProfile/UserProfile';

export const AppRoutes: React.FC<unknown> = () => (
  <Routes>
    <Route path="/" element={<PostFeed />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/userprofile" element={<UserProfile />}/>
    <Route path="/trainers" element={<Trainers/>}/>
    <Route path="/trainerprofile" element={<TrainerProfile />}/>
    <Route path="/advancedsearch" element={<AdvancedSearch/>}/>
    <Route path="/createtrainer" element={<CreateTrainer/>}/>
    <Route path="/createcomments" element={<CreateComments/>}/>
    <Route path="/showcomments" element={<ShowComments/>}/>
  </Routes>
)