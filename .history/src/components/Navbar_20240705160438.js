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
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
            <div className="container-fluid">
                {eLogo()}
                <a type='button' className="navbar-brand baskervville-sc-regular" href="/">Dark Phoenix Rising</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    {/* Off Canvas */}
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <p>.....</p>
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
