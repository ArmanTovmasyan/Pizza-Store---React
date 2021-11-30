import React from 'react';
import "./products.css";



const Products = ({ data }) => {


  return (
    <div className ="productsContainer">
      <div className ="productWrapper">
        {data.map((product, index) => {
          return (
            <div className = "productCard" key={index}>
              <img className ="product_img" src={product.img} alt={product.alt} />
              <div className = "productInfo">
                <p className ="productTitle" >{product.name}</p>
                <div className = "productDesc">{product.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
