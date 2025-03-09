import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import FlowerList from './components/Flowers';
import Compositions from './components/Compositions';
import AboutUs from './components/AboutUs';
import UserProfile from './components/UserProfile';
import Details from './components/Details';
import Cart from './components/Cart';
import './App.css';
function App() {
    
    return (
        <div>
            <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/flowers" element={<FlowerList />} />
                    <Route path="/compositions" element={<Compositions />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;