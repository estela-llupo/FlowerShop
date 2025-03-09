import React from "react";
import Logo from "../images/Logo.png";
import cart from "../images/cart.png";
import "./style/Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="navLinks">
        <img src={Logo} alt="Logo" onClick={() => window.location.href = "/"}/>
        <ul>
          <li>
            <Link to="/compositions">Compositions</Link>
          </li>
          <li>
            <Link to="/flowers">Flowers</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        </ul>
        <button className="cart-button"><Link to="/cart"><img id="cart" src={cart} alt="cart" /></Link></button>
        <input type="search" placeholder="Search Flowers" />
      </nav>
    </div>
  );
}

export default Navigation;