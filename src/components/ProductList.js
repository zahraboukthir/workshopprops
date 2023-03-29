import React from "react";
import ProductCard from "./ProductCard";

export const ProductList = ({ produits }) => {
  //   console.log(produits);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {produits.map((el, i) => (
        <ProductCard prod={el} key={i} />
      ))}
    </div>
  );
};
