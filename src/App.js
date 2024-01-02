import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Components/login/Login';
import Home from './Components/Home/Home';

const App = () => {
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handler to update authentication status
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

  return ( 
   
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      
      {/* <Route
        path="/"
        element={
          isAuthenticated ? (
            <Home />
          ) : (
            <Login onAuthentication={handleAuthentication} />
          )
        }
      /> */}
    </Routes>
  
);
};

export default App;
