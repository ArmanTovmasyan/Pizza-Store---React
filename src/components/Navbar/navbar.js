import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {

  const NavLink = Link;

  
  return (
    
      <nav className ="nav">
        <NavLink className ="navLink" to='/'>Pizza</NavLink>
        <div className = "navIcon">
          <p>Menu</p>
  
        </div>
      </nav>
   
  );
};

export default Navbar;
