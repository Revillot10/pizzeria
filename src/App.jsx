import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext'; // Cambio aquí: importamos UserContext
import Navbar_Cmp from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Cart from './views/Cart';
import Home from './views/Home';
import Login from './views/Login';
import Pizza from './views/Pizza';
import Register from './views/Register';
import './App.css'; 

const App = () => {
  const { token } = useContext(UserContext); // Cambio aquí: usamos useContext para obtener token desde UserContext

  return (
    <>      
      <Navbar_Cmp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
