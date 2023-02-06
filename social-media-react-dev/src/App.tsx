import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext, User } from './context/user.context';
import { AppRoutes } from './router/AppRoutes';
import { ThemeContext } from './context/theme-context';


function App() {

  const [user, setUser] = useState<User | undefined>();
  const value = { user, setUser };

  // set the darkmode switch up here
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = React.useState(false);


  //darkmode#2
  // Detecting the default theme
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={value}>
        <Router>
          <AppRoutes></AppRoutes>
        </Router>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
