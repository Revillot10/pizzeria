import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const CardPizza = ({ pizza, addToCart }) => {
  const { name, price, ingredients, img, desc } = pizza;
  
  // Estado para controlar si el texto está expandido o no
  const [isExpanded, setIsExpanded] = useState(false);

  // Función para alternar el estado de expansión
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card style={{ width: '21rem', margin: '10px', padding: '0'}}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body  style={{ padding: '5px'}}>
        <Card.Title style={{ textTransform: 'capitalize' }}>{name}</Card.Title>
        
        {/* Mostrar el texto con condiciones basadas en isExpanded */}
        <Card.Text
          style={{
            maxHeight: isExpanded ? 'none' : '100px',  // Sin límite cuando está expandido
            overflow: isExpanded ? 'visible' : 'hidden',  // El contenido se muestra completo
            textOverflow: 'ellipsis',  // Los puntos suspensivos se aplican cuando está limitado
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: isExpanded ? 'none' : 3, // Limitar a 3 líneas cuando no está expandido
          }}
        >
          {desc}
        </Card.Text>

        {/* Botón para alternar la expansión del texto */}
        <div className="d-flex justify-content-end">
        <Button variant="link" onClick={toggleDescription}>
          {isExpanded ? 'Ver Menos' : 'Ver Más'} 👀
        </Button>
        </div>
      </Card.Body>
      
      <ListGroup className="list-group-flush" style={{ padding: '0' }}>
        <ListGroup.Item style={{ padding: '5px'}}>
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

