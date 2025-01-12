import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

const CardPizza = ({ pizza, addToCart }) => {
  const { name, price, ingredients, img, desc, id } = pizza; 

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card style={{ width: '21rem', margin: '10px', padding: '0' }}>
      <Link to={`/pizza/${id}`}>
        <Card.Img variant="top" src={img} alt={name} />
      </Link>
      <Card.Body style={{ padding: '5px' }}>
        <Link to={`/pizza/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <Card.Title style={{ textTransform: 'capitalize' }}>{name}</Card.Title>
        </Link>

        <Card.Text
          style={{
            maxHeight: isExpanded ? 'none' : '100px', 
            overflow: isExpanded ? 'visible' : 'hidden', 
            textOverflow: 'ellipsis', 
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: isExpanded ? 'none' : 3, 
          }}
        >
          {desc}
        </Card.Text>

        <div className="d-flex justify-content-end">
          <Button 
            variant="link" 
            onClick={toggleDescription} 
            style={{ color: 'black', textDecoration: 'none' }} // Estilo para evitar azul y subrayado
          >
            {isExpanded ? 'Ver Menos' : 'Ver Más'} 👀
          </Button>
        </div>
      </Card.Body>

      <ListGroup className="list-group-flush" style={{ padding: '0' }}>
        <ListGroup.Item style={{ padding: '5px' }}>
          <p className="par_14"><strong>Ingredientes:</strong></p>
          <ul>
            {ingredients.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </ListGroup.Item>
      </ListGroup>

      <Card.Body style={{ padding: '10px' }}>
        <div className="d-flex justify-content-between align-items-center">
          <p className="par_22" style={{ margin: 0 }}>
            Precio: ${Intl.NumberFormat('es-CL').format(price)}
          </p>
          <Button
            style={{ backgroundColor: 'black', borderColor: 'black' }}
            onClick={() => addToCart(pizza)}
          >
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
