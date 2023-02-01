import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext, User } from './context/user.context';
import { AppRoutes } from './router/AppRoutes';


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

  return (
    <UserContext.Provider value={value}>
      {/* <button className="darkmode-switch" onClick={() => setDarkMode(!darkMode)}></button> */}

      <Router>
        <AppRoutes></AppRoutes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
