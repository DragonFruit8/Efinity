import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <section id="home" className="hero">
            {/* Black opacity .5 overlay */}
            <div className="overlay"></div>
            {/* Background image */}
            <div className="container">
                <h1>E-FINITY</h1>
                <h2 className="mb-5">
                    Empowering Communities, Sustaining the Future.</h2>
                <Link to="/services" className="btn btn-custom btn-lg">Our Services</Link>
            </div>
        </section>
        <section id="mission" className=" py-5">
            <div className="container">
                <h2 className="section-title">Our Mission</h2>
                <p className="lead">Our mission is to empower communities through technology and innovation. We believe that the future is sustainable and we are committed to making it a reality.</p>
            </div>
            </section>
            </>
    );
}

export default Home;