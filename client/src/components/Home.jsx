import React from 'react';
import './style/Home.css';
import HPimg from '../images/HPimg.jpg';
import '../App.css';
import Navigation from './Navigation'
import Footer from './Footer';


function Home() {
    
    return (
        <div>
            <nav className="navLinks">
                <Navigation />
            </nav>
            <div>
                <div className="container">
                    <img src={HPimg} alt="HPimg" />
                </div>
            </div>
            
        <Footer />
        </div>
    )
}
export default Home