import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`); 
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la pizza');
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">Cargando pizza...</div>;
  }

  if (error) {
    return <div className="text-center text-danger mt-5">Error: {error}</div>;
  }

  // Convertir la primera letra del nombre de la pizza a mayúscula
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
      <div className="card" style={{ width: '24rem' }}>
        <img src={pizza.img} className="card-img-top" alt={`Pizza ${pizza.name}`} />
        <div className="card-body">
          <h5 className="card-title text-center">{capitalizeFirstLetter(pizza.name)}</h5>
          <h6 className="text-center text-success">Precio: ${pizza.price}</h6>
          <p className="card-text">{pizza.desc}</p>
          <h6>Ingredientes:</h6>
          <ul className="list-group list-group-flush">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                {ingredient}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary mt-3 w-100" disabled>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
