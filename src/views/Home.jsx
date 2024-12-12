import React, { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Error fetching the pizzas');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div
      className="d-flex justify-content-start flex-wrap"
      style={{ width: '100%', marginBottom: '80px', overflowX: 'hidden' }}
    >
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex flex-column m-2"
          style={{ width: '18rem' }}
        >
          <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;






