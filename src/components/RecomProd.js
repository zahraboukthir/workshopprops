import React from "react";
import { Table } from "react-bootstrap";
import RecProdCard from "./RecProdCard";

const RecomProd = ({ produits, funct }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Prod Photo</th>
          <th>Prod Name</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {produits.map((el, i) => (
          <RecProdCard prod={el} key={i} funct={funct} />
        ))}
      </tbody>
    </Table>
  );
};

export default RecomProd;
