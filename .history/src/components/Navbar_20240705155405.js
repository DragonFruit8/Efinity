import React from 'react';
import { Link } from 'react-router-dom';
import earthLogo from '../../src/Image/Earth Phoenix.webp';

function eLogo() {
    return (
        <img src={earthLogo} alt="Earth Phoenix Logo" width="50" height="50" style={{
            borderRadius: '20%',
            border: '1px solid #fff',
            margin: '0 10px'
        
        }} />
    );
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className="container-fluid">
                {eLogo()}
                <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    Dark Phoenix Rising
                </a>
                <Link className="navbar-brand baskervville-sc-regular" to="/"></Link>
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="offcanvasExample">
                    Button with data-bs-target
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
