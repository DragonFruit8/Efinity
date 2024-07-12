import React from 'react';
import djPic from '../../src/Image/gabriel-barletta-OuLVg5ZKphI-unsplash.jpg';
import dancePic from '../../src/Image/javier-allegue-barros-55bVEzGVnzY-unsplash.jpg';
const Services = () => {

    function dj() {
        return <img id='img' src={djPic} className="card-img-top" alt="Custom Floral Arrangements" />;
    }

    function dance() {
        return <img id='img' src={dancePic} className="card-img-top" alt="Dance Classes" />;
    }

    function webDev() {
        return <img id='img' src=="card-img-top" alt="Web Development" />;
    }

    return (
        <section id="services" className="bg-light py-5">
            <div className="container row">
                <div className="row mb-2">
                    <h2 className="text-center">Our Services</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="card mb-4">
                            {dj()}
                            <div className="card-body">
                                <h5 className="card-title">Custom Floral Arrangements</h5>
                                <p className="card-text">Tailored to your preferences and needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="card mb-4">
                            {dance()}
                            <div className="card-body">
                                <h5 className="card-title">Same-Day Delivery</h5>
                                <p className="card-text">Order by noon for same-day delivery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="card mb-4">
                            <img src="https://source.unsplash.com/400x300/?wedding-flowers" className="card-img-top" alt="Wedding and Event Flowers" />
                            <div className="card-body">
                                <h5 className="card-title">Wedding and Event Flowers</h5>
                                <p className="card-text">Consultation and design services available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
