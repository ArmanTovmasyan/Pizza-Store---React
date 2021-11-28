import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';



function Header ({cartItems}) {
    return (
        <header className = "header">
            <div>
                <h1>
                    <Link to = "/home" className ="logo">
                        Your Pizza
                    </Link>
                </h1>
            </div>
            <div className ="header-links">
                <ul>
                    <li>
                        <Link to = "/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to = "/cart" className = "cart">
                        <FontAwesomeIcon icon={faShoppingBasket} />

                            <span className ="cart-length">
                                {cartItems.length ===0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;