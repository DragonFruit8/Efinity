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
        <section id="mission" className="py-5">
            <div className="container">
                <h2 className="section-title">Our Mission</h2>
                <p className="lead">Our mission is to empower communities through technology and innovation. We believe that the future is sustainable and we are committed to making it a reality.</p>
            </div>
            </section>
            <section id="vision" className="py-5">
            <div className="container">
                <h2 className="section-title">Our Vision</h2>
                    <p className="lead">We aim to strategically establish community centers that encourage sustainability, environmental enrichment, and best practices for peaceful cohabitation.</p>
                </div>
            </section>
            {/* Join us in Making a Difference */}
            <section id="cta" className="py-5">
                <div className="container">
                    <div className="text-center">
                        <h2>Join us in Making a Difference</h2>
                        <p className="lead">We are always looking for volunteers and partners to help us in our mission. If you would like to join us, please click the button below.</p>
                        <Link to="/contact" className="btn btn-custom btn-lg">Contact Us</Link>
                    </div>
                </div>
            </section>
            </>
    );
}

export default Home;