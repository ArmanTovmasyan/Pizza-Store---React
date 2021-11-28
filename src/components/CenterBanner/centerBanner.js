import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import "./centerBanner.css";
import { Link } from 'react-router-dom';



const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className ="center_container">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className ="centerBanner_content">
        <div className = "bannerItems">
          <h1>Greatest Pizza Ever</h1>
          <p>Ready in 60 seconds</p>
          <Link className = "sidebarLink" to='/cart'>Place Order</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
