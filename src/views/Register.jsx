import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [confirmClave, setConfirmClave] = useState("");

  const validarInput = (e) => {
    e.preventDefault(); // Prevenir recarga de página
    if (!email || !clave || !confirmClave) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      if (clave !== confirmClave) {
        alert("Las contraseñas no coinciden.");
        return;
      }

    if (clave.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
      }
  
      alert("Formulario enviado correctamente.");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form 
      onSubmit={validarInput}
      style={{ width: '800px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
        
        <h2 className="text-center mb-4">Register</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmClave}
            onChange={(e) => setConfirmClave(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="d-flex justify-content-center mx-auto">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
