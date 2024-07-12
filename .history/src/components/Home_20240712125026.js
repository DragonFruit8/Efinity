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
                <Link to="/get-involved" className="btn btn-custom btn-lg">Join Our Cause</Link>
            </div>
        </section>
        <section id="mission" className="py-5">
            <div className="container">
                <h2 className="section-title ">Our Mission</h2>
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
                        <h2>Join Us in Making a Difference:</h2>
                        <p className="lead">
                            Discover how E-Finity is transforming communities through sustainable practices, innovative business models, and community-driven initiatives.</p>
                        {/* Form or newsletter */}
                        <Link to="/contact" className="btn btn-custom btn-lg">Contact Us</Link>
                    </div>
                </div>
            </section>
            {/* Get involved */}
            <section id="get-involved" className="py-5">
                <div className="container">
                    <h2 className="section-title">Get Involved</h2>
                    <p className="lead">We are always looking for passionate individuals who are committed to making a difference. Join us in our mission to empower communities and sustain the future.</p>
                    <form className='d-flex row gap-3'>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <button type="submit" className="btn btn-custom">Get Involved</button>
                    </form>
                </div>
            </section>
            </>
    );
}

export default Home;