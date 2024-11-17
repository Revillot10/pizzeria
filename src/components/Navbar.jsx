import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faLockOpen, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import Header from './Header'

const Navbar_Cmp = () => {
  const number = 25000;
  const total =  Intl.NumberFormat("es-CL").format(number);
  const token = true;

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="estilo_navbar_navbar">  
        <Container className='responsive-navbar-nav'>
          <Navbar.Brand href="#home"><span className="text-white">Pizzeria Mamma Mia</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><FontAwesomeIcon icon={faPizzaSlice} style={{color: "#FFD43B",}} /><span className="text-white"> Home</span></Nav.Link>
              <Nav.Link href="#pricing">{token ? (<FontAwesomeIcon icon={faLockOpen} style={{color: "#FFD43B",}} />):(<FontAwesomeIcon icon={faKey} style={{color: "#FFD43B",}} />)}<span className="text-white">{token ? (" Profile"):(" Login")} </span></Nav.Link>
              <Nav.Link href="#pricing">{token ? (<FontAwesomeIcon icon={faLock} style={{color: "#FFD43B",}} />):(<FontAwesomeIcon icon={faKey} style={{color: "#FFD43B",}} />)}<span className="text-white">{token ? (" Logout"):(" Register")} </span></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">🛒<span className="total_nav">Total: ${total}</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Header></Header>
    </div>
  )
}

export default Navbar_Cmp