import React from 'react';
// import { Link } from 'react-router-dom';
import Info from './Info';

const Footer = () => {
    return (
        <footer id="footer" className="bg-dark py-4 pt-5">
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Efinity</h5>
                        <p>E-Finity is dedicated to promoting effective operational functionality in startups, driving philanthropic efforts, and facilitating community education through local leadership. Our goal is to bridge established businesses with new ventures, fostering mutually beneficial practices and sustainable development. </p>
                    </div>
                    {/* Info */}
                    <Info />
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <p className="nav-items">
                            <a href="/" className="d-block nav-link">Home</a>
                            <a href="/about" className="d-block nav-link">About</a>
                            <a href="/services" className="d-block nav-link">Services</a>
                            <a href="/contact" className="d-block nav-link">Contact</a>
                        </p>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; 2024 Dark Phoenix Rising. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
