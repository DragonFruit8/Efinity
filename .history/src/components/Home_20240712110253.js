import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section id="home" className="hero">
            {/* Black opacity .5 overlay */}
            <div className="overlay"></div>
            {/* Background image */}
            <div className="container">
                <h1>Efinity</h1>
                <h2 className="mb-5">
                    "Promoting effective operational functionality in startups, driving philanthropic efforts, and facilitating community education through local leadership."</h2>
                <Link to="/services" className="btn btn-custom btn-lg">Our Services</Link>
            </div>
        </section>
    );
}

export default Home;