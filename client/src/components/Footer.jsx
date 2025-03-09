import './style/Footer.css';
function Footerpage () {
return (
    <footer className="footer">
        <div className="contact-info">
        <p>Bloom Flower Shop</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: <a href="mailto:info@bloomflowershop.com" style={{ color: 'white' }}>info@bloomflowershop.com</a></p>
      </div>
        <p>&copy; 2023 Flower Shop. All rights reserved.</p>
    </footer>
)
}
export default Footerpage;