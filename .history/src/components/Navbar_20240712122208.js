import React from 'react';
import { Link } from 'react-router-dom';
import earthLogo from '../../src/Image/ELogo.png';

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
        <>
            <nav className="navbar navbar-expand-lg navbar
                
            <div className="container-fluid gap-5">
                    <div>
                        <a className="logo" type='button' href="/">
                            {eLogo()}
                        </a>
                    </div>
                    {/* Large screen show text */}
                    <div>
                        <h1 className="navbar-brand d-none d-lg-block my-0 py-0" >E-FINITY</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"> 
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/get-involved">Get Involved</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Off Canvas */}
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <h1 className="offcanvas-title" id="offcanvasScrollingLabel">
                                Dark Phoenix Rising</h1>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            {/* <p>Try scrolling the rest of the page to see this option in action.</p> */}
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Dark Phoenix Rising</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body bg-dark text-light">
                            {/* Navigation ul > li */}
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
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
