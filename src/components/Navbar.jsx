import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faLockOpen, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import { Link } from 'react-router-dom';

const Navbar_Cmp = () => {
  const number = 25000;
  const total = Intl.NumberFormat("es-CL").format(number);
  const token = true;

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="estilo_navbar_navbar">
        <Container className="responsive-navbar-nav">
          <Navbar.Brand href="#home">
            <span className="text-white">Pizzeria Mamma Mia</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faPizzaSlice} style={{ color: "#FFD43B" }} />
                <span className="text-white"> Home</span>
              </Link>
              <Link to="/profile" className="nav-link">
                <FontAwesomeIcon
                  icon={faLockOpen}
                  style={{ color: "#FFD43B" }}
                />
                <span className="text-white">{token ? "  Profile" : " Login"}</span>
              </Link>
              <Link to="/login" className="nav-link">
                <FontAwesomeIcon
                  icon={faKey}
                  style={{ color: "#FFD43B" }}
                />
                <span className="text-white">{token ? " Login" : " Profile"}</span>
              </Link>
              <Link to="/register" className="nav-link">
                <FontAwesomeIcon
                  icon={faKey}
                  style={{ color: "#FFD43B" }}
                />
                <span className="text-white">{token ? " Register" : " Logout"}</span>
              </Link>
            </Nav>
            <Nav>
            <Link to="/cart" className="nav-link">
                🛒<span className="total_nav">Total: ${total}</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Header />
    </div>
  );
};

export default Navbar_Cmp;

