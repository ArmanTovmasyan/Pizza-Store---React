import React from 'react';
import { useState } from 'react';
import "./sidebar.css";
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { FaPizzaSlice } from 'react-icons/fa';


const Sidebar = () => {
  
  
  const [istrue, setIstrue]=useState(false)
  const changeistrue =()=> {
      setIstrue(!istrue)
  }
const SidebarLink = Link;
const SidebarRoute = Link;

  return (
    <div>
       {
        istrue ? <aside className ="sidebarContainer">
            <div className = "sidebarMenu">
                <SidebarLink className = "sidebarLink" to='/cart'>Pizzas</SidebarLink>
                <SidebarLink className = "sidebarLink"  to='/contacts'>Contacts</SidebarLink>
                <SidebarLink className = "sidebarLink"  to='/about'>About us</SidebarLink>
            </div>
            <div className = "sideBtnWrap">
                <SidebarLink className = "sideBarRoute" to='/login'>Sign in</SidebarLink>
            </div>
            <div className = "icon" onClick={changeistrue}>
                <FaTimes className ="closeIcon" />
            </div>

            </aside>
            : <aside className ="sidebarContainer_1"> </aside>
      
      }

      <div className = "icon" onClick={changeistrue}>
          <FaPizzaSlice className = "FaPizzaSlice"/>
      </div>
     
    </div>
  );
};

export default Sidebar;