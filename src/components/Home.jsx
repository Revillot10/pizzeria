import React from 'react';
import CardPizza from './CardPizza';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pizzas } from './pizzas';

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-start flex-wrap" style={{ width: '100%', marginBottom: '80px', overflowX: 'hidden' }}>
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="d-flex flex-column m-2" style={{ width: '18rem' }}>
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
    </>
  );
};

export default Home;





