import React, { createContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// This is a custom provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'dark');
  };

  // The value that will be supplied to the descendants
  const contextValue = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the context itself for use in other components
export default ThemeContext;
