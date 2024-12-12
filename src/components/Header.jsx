import React from 'react'
import Card from 'react-bootstrap/Card';
import headerImage from '../assets/Header.jpg';  // Asegúrate de que la ruta sea correcta

const Header = () => {
  return (
    <>
    <Card style={{ border: '0px'}} >
    <Card.Img variant="top" src={headerImage} style={{ height: '200px', objectFit: 'cover', filter:'brightness(0.3)' }} />
        <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
            <Card.Title className="text-white text-center">
            <h1>¡Pizzería Mamma Mia!</h1>
            <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
            </Card.Title>
        </Card.ImgOverlay>    
    </Card>    
    </>
  )
}
export default Header