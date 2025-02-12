import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useUser } from "../context/UserContext"; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const { login, error, loading } = useUser(); 

  useEffect(() => {
    if (error) {
      alert(error); 
    }
  }, [error]);

  const validarInput = async (e) => {
    e.preventDefault(); 

    if (!email || !clave) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (clave.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Llamar al método login
    await login({ email, password: clave });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form
        onSubmit={validarInput}
        style={{
          width: "800px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-4">Login</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
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

        <Button
          variant="dark"
          type="submit"
          className="d-flex justify-content-center mx-auto text-white"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
