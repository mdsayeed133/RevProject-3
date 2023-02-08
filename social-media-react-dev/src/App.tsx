import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UserContext, User } from './context/user.context';
import { AppRoutes } from './router/AppRoutes';
import { ThemeContext } from './context/theme-context';
import NewNavbar from './components/navbar/NewNavbar';
import { GiMoon } from 'react-icons/gi'
import { Login } from '@mui/icons-material';
import AdvancedSearch from './components/advancedSearch/advancedSearch';
import CreateComments from './components/Comments/CreateComments';
import ShowComments from './components/Comments/ShowComments';
import CreateEmployee from './components/CreateEmployee/CreateEmployee';
import EmployeeProfile from './components/EmployeeProfile/EmployeeProfile';
import Employees from './components/Employees/Employees';
import GuestFeed from './components/GuestFeed/GuestFeed';
import CreatePostForm from './components/post-feed/CreatePostForm';
import { PostFeed } from './components/post-feed/PostFeed';
import Register from './components/register/Register';
import SignUp from './components/register/SignUp';
import UserProfile from './components/UserProfile/UserProfile';

function App() {

  const [user, setUser] = useState<User | undefined>();
  const value = { user, setUser };

  // set the darkmode switch up here
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



  // return (
  //   <ThemeContext.Provider value={{ theme, setTheme }}>
  //     <UserContext.Provider value={value}>
  //       <Router>
  //         <AppRoutes></AppRoutes>
  //       </Router>
  //     </UserContext.Provider>
  //   </ThemeContext.Provider>
  // );
  return (
    <div className="App">
      <div className="darkmode-switch">
        <button onClick={() => setDarkMode(!darkMode)} className="dark-btn">☾</button>
      </div>
      <Router>
        <AppRoutes></AppRoutes>
        {/* <Route path="/" element={<PostFeed />} />
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
        <Route path="/advancedsearch" element={<AdvancedSearch />} /> */}
      </Router>
    </div>
  )
}

export default App;
