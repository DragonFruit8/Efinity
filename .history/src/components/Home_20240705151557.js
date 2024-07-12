import React from 'react';


const Home = () => {
    return (
        <section id="home" className="hero">
            {/* Black opacity .5 overlay */}
            <div className="overlay"></div>
            {/* Background image */}
            <div className="container">
                <h1>A One Stop Shop For Success</h1>
                <p>Perfect for every occasion</p>
                <a href="/shop" className="btn btn-custom btn-lg">Our Services</a>
            </div>
        </section>
    );
}

export default Home;
