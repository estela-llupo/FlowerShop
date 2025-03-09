import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import allProducts from "./seed";
import "./style/Home.css";
import "./style/Flowers.css";

function Flowers() {
  const [selectedCategory, setSelectedCategory] = useState(null);


  const handleCategorySelect = (category) => {
    console.log("Selected category:", category); 
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <div>
      <nav className="navLinks">
        <Navigation />
      </nav>
      <div className="flower-container">
        <div className="category-menu">
          <button onClick={() => handleCategorySelect("Rose")}>Rose</button>
          <button onClick={() => handleCategorySelect("Lily")}>Lily</button>
          <button onClick={() => handleCategorySelect("Sunflower")}>Sunflower</button>
          <button onClick={() => handleCategorySelect("Orchid")}>Orchid</button>
          <button onClick={() => handleCategorySelect("Peony")}>Peonies</button>
          <button onClick={() => handleCategorySelect("Tulip")}>Tulips</button>
          <button onClick={() => handleCategorySelect("Green")}>Green</button>
          <button onClick={() => handleCategorySelect("Decoration")}>Decoration</button>
          <button onClick={() => handleCategorySelect(null)}>All</button>
        

        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Link to={`/details/${product.id}`} key={product.id} className="product-item-link">
              <div className="product-item">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
              </div>
            </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Flowers;