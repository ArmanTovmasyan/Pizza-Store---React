import React from 'react';
import "../Feature/feuture.css";
import { Link } from 'react-router-dom';


const Feature = () => {
  return (
    <div className = "feuture_container">
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <Link className = "sidebarLink" to='/cart'>Order now</Link>
    </div>
  );
};

export default Feature;
