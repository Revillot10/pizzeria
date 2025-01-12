import React, { useContext } from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faLockOpen, faKey } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Navbar_Cmp = () => {
  const { cart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); // Accede al token y al método logout desde UserContext.
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0);
  const total = Intl.NumberFormat('es-CL').format(totalPrice);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login'); // Redirige al usuario al login.
  };

  const setActiveClass = ({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link';

  const handleBrandClick = () => {
    navigate('/'); // Redirige al inicio
  };

  return (
    <div className="estilo_navbar_navbar">
      <Navbar collapseOnSelect expand="lg" className="estilo_navbar_navbar">
        <Container className="responsive-navbar-nav">
          <Navbar.Brand onClick={handleBrandClick}> {/* Usa onClick para redirigir */}
            <span>Pizzeria Mamma Mia</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className={setActiveClass}>
                <FontAwesomeIcon icon={faPizzaSlice} style={{ color: '#FFD43B' }} />
                <span> Home</span>
              </NavLink>
              {token ? (
                <>
                  <NavLink to="/profile" className={setActiveClass}>
                    <FontAwesomeIcon icon={faLockOpen} style={{ color: '#FFD43B' }} />
                    <span> Profile</span>
                  </NavLink>
                  <NavLink to="/" className={setActiveClass} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faKey} style={{ color: '#FFD43B' }} />
                    <span> Logout</span>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/login" className={setActiveClass}>
                    <FontAwesomeIcon icon={faKey} style={{ color: '#FFD43B' }} />
                    <span> Login</span>
                  </NavLink>
                  <NavLink to="/register" className={setActiveClass}>
                    <FontAwesomeIcon icon={faKey} style={{ color: '#FFD43B' }} />
                    <span> Register</span>
                  </NavLink>
                </>
              )}
            </Nav>
            <Nav>
              <NavLink to="/cart" className={setActiveClass}>
                🛒<span className="total_nav">Total: ${total}</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Header />
    </div>
  );
};

export default Navbar_Cmp;
