import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <Container className="notfound-container">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="text-center">
          <FontAwesomeIcon 
            icon={faExclamationTriangle} 
            className="error-icon" 
            style={{ fontSize: '100px', color: '#ff6347' }} 
          />
          <h1 className="error-title">¡Oops! Página no encontrada</h1>
          <p className="error-message">
            La página que buscas no existe. Regresa a la página principal y explora desde allí.
          </p>
          <Link to="/">
            <Button variant="primary" className="error-btn">
              Volver al Inicio
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

