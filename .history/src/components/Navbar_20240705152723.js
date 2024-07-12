import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a class="navbar-brand" href="/">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" to="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/services">Services</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" to="/shop">Shop</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" to="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
