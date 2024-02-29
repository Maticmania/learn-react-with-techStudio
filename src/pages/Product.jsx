import React from "react";
//import product Images

import ProductCard from "../components/ProductCARDWORK";
import { data } from "../db/ProductDB";

const Product = () => {
  return (
    <>
      <h1>Product Page</h1>
        <div className="d-flex justify-content-between flex-wrap gap-4">
      {data.map((product) => {
        return(
            <div className="" key={product.id}>
                <ProductCard product={product}/>
            </div>
        )
      })}
      </div>
    </>
  );
};

export default Product;
