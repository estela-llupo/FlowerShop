import Navigation from "./Navigation";
import "./style/AboutUs.css"

function AboutUs() {
    return (
        <div>
            <nav className="navLinks">
                <Navigation />
            </nav>
            <div className="about-us">
                <p>Welcome to Bloom, where every bloom tells a story! 🌸

We are passionate about bringing beauty, joy, and elegance to your special moments through the language of flowers. Whether you're celebrating love, friendship, or a simple everyday joy, our carefully curated selection of fresh, high-quality flowers ensures the perfect touch for any occasion.

At Bloom, we believe flowers are more than just decorations—they are emotions, memories, and expressions of love. That’s why we work with expert florists to craft stunning arrangements, from romantic roses to cheerful sunflowers and exotic orchids.

We take pride in our commitment to exceptional customer service, timely delivery, and fresh, long-lasting blooms. Whether you're looking for a breathtaking bouquet, elegant event florals, or just a little something to brighten your day, we’re here to make it special.

Thank you for choosing Bloom. Make life bloom together! </p>
            </div>
        </div>
    );
}

export default AboutUs;