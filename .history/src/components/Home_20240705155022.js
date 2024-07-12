import React from 'react';


const Home = () => {
    return (
        <section id="home" className="hero">
            {/* Black opacity .5 overlay */}
            <div className="overlay">
            {/* Background image */}
            <div className="container">
                <h1>A One Stop Shop For Success</h1>
                <h2 className="mb-5">Be Your OWN Best Sales Person</h2>
                <a href="/shop" className="btn btn-custom btn-lg">Our Services</a>
            </div>
            </div>
        </section>
    );
}

export default Home;
