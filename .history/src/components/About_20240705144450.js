import React from 'react';
import spiral from '..//spiral.png';


const About = () => {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>About Us</h2>
                        <p>Blooming Joy Florist is a local floral shop that offers fresh, beautiful flower arrangements for all occasions. We pride ourselves on our quality, creativity, and customer satisfaction.</p>
                        <p>Established in 2005, Blooming Joy Florist has been providing the community with beautiful, high-quality floral arrangements for over 15 years. Our mission is to bring joy and beauty to every moment through our creative and fresh floral designs.</p>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://source.unsplash.com/800x600/?flowers" className="img-fluid" alt="About Us" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
