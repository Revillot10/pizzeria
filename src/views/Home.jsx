import React, { useState, useEffect, useContext } from 'react'; 
import CardPizza from '../components/CardPizza';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/CartContext'; 

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart, setCart } = useContext(CartContext); 

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


  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {      
      setCart(cart.map((item) => item.id === pizza.id ? { ...item, count: item.count + 1 }  : item ));
    }else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };


  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div
    className="d-flex flex-wrap justify-content-start"
    style={{ width: '100%', overflowX: 'hidden', gap: '20px'}}
  >
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex flex-column m-2"
          style={{ width: '21rem' }}
        >
          <CardPizza
            pizza={pizza} 
            addToCart={addToCart}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;






