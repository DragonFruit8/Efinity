import React from 'react';
import spiralPic from '../../src/Image/Spiral.webp';

function spiral() {
    return <img id='aboutImg' src={spiralPic} className="img-fluid" alt="About Us" />;
}

const About = () => {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>About Us</h2>
                        
                    </div>
                    <div className="col-lg-6">
                        {spiral()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
