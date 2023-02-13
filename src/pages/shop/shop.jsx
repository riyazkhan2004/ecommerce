import React from "react";
import "./shop.css";
import Product from './product'
import PRODUCTS from '../../assets/products/products'
export function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">MATCHBOXES AT LOWER PRICE</div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  );
}
