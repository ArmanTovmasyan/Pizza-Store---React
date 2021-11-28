import React from 'react';
import NotFoundPic from "./Images/notfound.jpg";
import "./NotFound.css";

function NotFound(props) {
    return (
        <div className = "NotFound">
         <img src={NotFoundPic }alt="NotFoundPic" />
        </div>
    );
}

export default NotFound;