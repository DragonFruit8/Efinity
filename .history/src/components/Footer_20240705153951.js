import React from 'react';
import { Link } from 'react-router-dom';
import Info from './Info';

const Footer = () => {
    return (
        <footer id="footer" className="bg-dark py-4 pt-5">
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Blooming Joy Florist</h5>
                        <p>Dark Phoenix Rising empowers struggling creatives through music, technology, and dance, transforming stories of adversity into inspiring symphonies of success. Join us to co-create and rise from the ashes, finding your unique voice and artistic expression.</p>
                    </div>
                    {/* Info */}
                    <Info />
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <p>
                            <a href="https://www.youtube.com/channel/UCGMA_ZJ0uvBKVe8IG7uaSSA" className="me-2" target="_blank" rel="noreferrer">YouTube</a> |
                            <a href="https://www.tiktok.com/@etherialphoenix" className="mx-2" target='_blank'>TikTok</a>
                            {/* |<a href="/" className="ms-2">Twitter</a> */}
                        </p>
                        <h5>Quick Links</h5>
                        <p>
                            <Link to="/" className="d-block">Home</Link>
                            <Link to="/about" className="d-block">About</Link>
                            <Link to="/services" className="d-block">Services</Link>
                            {/* <Link to="/shop" className="d-block">Shop</Link> */}
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
