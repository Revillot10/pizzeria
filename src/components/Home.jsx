import React from 'react'
import CardPizza from './CardPizza'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from 'react-bootstrap';

const Home = () => {
  return (
    <>
        <div className="mt-5 mb-5 d-flex justify-content-evenly"> 
            <Row className=" d-flex justify-content-evenly" xs={1} md={4}> 
                <Col>
                    <CardPizza name="Napolitana" price={5950} ingredients={["mozzarella", "tomates", "jamón", "orégano"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"></CardPizza>
                </Col>
                <Col>
                    <CardPizza name="Española" price={6950} ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"></CardPizza>
                </Col>
                <Col>
                    <CardPizza name="Pepperoni" price={6950} ingredients={["mozzarella", "pepperoni", "orégano"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"></CardPizza>
                </Col>
                <Col>
                    <CardPizza name="Siciliana" price={9950} ingredients={["Salchicha", "cebolla", "orégano"]} img="https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg"></CardPizza>                    
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Home