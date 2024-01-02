import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './Components/login/Login';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart'
const App = () => {
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Handler to update authentication status
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path='/cart' element={<Cart/>}/> */}
        <Route path="/cart" element={<Cart/>} />

        
      </Routes>
    </>

  );
};

export default App;