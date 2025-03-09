import Navigation from "./Navigation";
import "./style/Compositions.css"
import compositions from "./seed";
import React, { useState, useEffect} from "react";

function Compositions() {
    const [composes, setComposes] = useState([]);

    useEffect(() => {
        fetch("/api/compositions")
        .then((res) => res.json())
        .then((data) => setComposes(data));
    });
    return (
        <div>
            <nav className="navLinks">
                <Navigation />
            </nav>
            <div>
                <h1>Compositions</h1>
            </div>
            <div className="body-composition">
                <div className="composition-grid">
                    {compositions.map((compositions) => (
                        <div key={compositions.id} className="product-item">
                            <img src={compositions.imageUrl} alt={compositions.name} />
                            <h2>{compositions.name}</h2>
                            <p>Price: ${compositions.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Compositions;