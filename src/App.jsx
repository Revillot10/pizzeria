import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar_Cmp from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Cart from './views/Cart';
import Home from './views/Home';
import Login from './views/Login';
import Pizza from './views/Pizza';
import Register from './views/Register';
import { Routes, Route } from 'react-router-dom';
import CartProvider from "./context/CartContext";

function App() {
  return (
    <>
    <CartProvider>
      <Navbar_Cmp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
      </CartProvider>
    </>
  );
}

export default App;


