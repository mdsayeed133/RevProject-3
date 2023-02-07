import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext, User } from './context/user.context';
import { AppRoutes } from './router/AppRoutes';
import { ThemeContext } from './context/theme-context';
import NewNavbar from './components/navbar/NewNavbar';
import {GiMoon} from 'react-icons/gi'

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
        <button onClick={() => setDarkMode(!darkMode)} className="btn btn-secondary dark-btn">DarkMode</button>
      </div>
      <Router>
        {/* <NewNavbar/> */}
        <AppRoutes></AppRoutes>
      </Router>
    </div>
  )
}

export default App;
