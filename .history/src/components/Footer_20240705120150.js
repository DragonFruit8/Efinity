import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Blooming Joy Florist</h5>
                        <p>Bringing joy to every bloom. We offer fresh, beautiful flower arrangements for all occasions with a focus on quality, creativity, and customer satisfaction.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@bloomingjoyflorist.com</p>
                        <p>Address: 123 Flower St, City, State, ZIP</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <p>
                            <a href="#" className="me-2">Facebook</a> |
                            <a href="#" className="mx-2">Instagram</a> |
                            <a href="#" className="ms-2">Twitter</a>
                        </p>
                        <h5>Quick Links</h5>
                        <p>
                            <Link to="/" className="d-block">Home</Link>
                            <Link to="/about" className="d-block">About</Link>
                            <Link to="/services" className="d-block">Services</Link>
                            <Link to="/shop" className="d-block">Shop</Link>
                            <Link to="/contact" className="d-block">Contact</Link>
                        </p>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; 2024 Blooming Joy Florist. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
