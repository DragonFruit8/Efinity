import React from 'react';
import '../App.css';

const Home = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <h1>Fresh Flowers Delivered Daily</h1>
                <p>Perfect for every occasion</p>
                <a href="/shop" className="btn btn-custom btn-lg">Shop Now</a>
            </div>
        </section>
    );
}

export default Home;
