import React from 'react';
import "./products.css";



const Products = ({ heading, data }) => {


  return (
    <div className ="productsContainer">
      <h1 className ="productsHeading">{heading}</h1>
      <div className ="productWrapper">
        {data.map((product, index) => {
          return (
            <div className = "productCard" key={index}>
              <img className ="product_img" src={product.img} alt={product.alt} />
              <div className = "productInfo">
                <p className ="productTitle" >{product.name}</p>
                <div className = "productDesc">{product.desc}</div>
                {/* <div className ="productPrice">{product.price}</div> */}
                {/* <button className = "productButton">{product.button}</button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;