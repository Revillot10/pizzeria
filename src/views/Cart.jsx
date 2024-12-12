import React, { useState } from 'react';
import { pizzaCart } from './pizzas';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseCount = (id) => {
    setCart((prevCart) => prevCart.map((item) => item.id === id ? { ...item, count: item.count + 1 } : item) );
  };

  const decreaseCount = (id) => {
    setCart((prevCart) => prevCart.map((item) => item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item).filter((item) => item.count > 0) 
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
<div style={{ width: '50%', margin: '0 auto' }}>
<h2 style={{ textAlign: 'left', marginTop: '20px' }}>Detalles del Pedido</h2>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Imagen</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((pizza) => (
        <tr key={pizza.id}>
          <td>
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{ width: '80px', borderRadius: '8px' }}
            />
          </td>
          <td>{pizza.name}</td>
          <td>${Intl.NumberFormat('es-CL').format(pizza.price)}</td>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => decreaseCount(pizza.id)}
              >
                -
              </Button>
              <span>{pizza.count}</span>
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => increaseCount(pizza.id)}
              >
                +
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  <h3 style={{ textAlign: 'left' }}>Total: ${Intl.NumberFormat('es-CL').format(total)}</h3>
  <Button variant="dark" style={{ display: 'block', textAlign: 'left',  marginBottom: '20px' }}>
    Pagar
  </Button>
</div>

    
  );
};

export default Cart;
