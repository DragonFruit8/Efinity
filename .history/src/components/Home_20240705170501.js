import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section id="home" className="hero">
            {/* Black opacity .5 overlay */}
            <div className="overlay"></div>
            {/* Background image */}
            <div className="container">
                <h1>A One Stop Shop For Success</h1>
                <h2 className="mb-5">Be Your OWN Best Sales Person</h2>
                <Link to="/services" className="btn btn-custom btn-lg">Our Services</Link>
            </div>
        </section>
    );
}

export default Home;
