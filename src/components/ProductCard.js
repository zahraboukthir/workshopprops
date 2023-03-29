import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ prod }) => {
  console.log(prod);
  return (
    <Card style={{ width: "18rem", marginTop: "20px", marginBottom: "20px" }}>
      <p>{prod.rate}</p>
      <Card.Img variant="top" src={prod.imgSrc} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>{prod.price}</Card.Text>
        <Card.Text>{prod.qts}</Card.Text>

        <Button variant="primary">ADD To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
