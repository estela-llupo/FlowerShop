import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import allProducts from "./seed";
import Navigation from "./Navigation";
import "./style/details.css";

function Details() {
  const [cart, setCart] = useState([]);
    const { id } = useParams();
    const product = allProducts.find((product) => product.id === id);

    console.log("ID from URL:", id);
    console.log("Found Product:", product);

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
  };

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <nav className="navLinks">
                <Navigation />
            </nav>
            <div className="details-container">
                <div className="product-details">
                    <img src={product.imageUrl} alt={product.name} />
                    <div>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Description: {product.description}</p>
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;



