import React from 'react';


const Services = () => {
    return (
        <section id="services" className="bg-light py-5">
            <div className="container row">
                <div className="row mb-2">
                    <h2 className="text-center">Our Services</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="card mb-4">
                            <img src="../../public/gabriel-barletta-OuLVg5ZKphI-unsplash.jpg" className="card-img-top" alt="Custom Floral Arrangements" />
                            <div className="card-body">
                                <h5 className="card-title">Custom Floral Arrangements</h5>
                                <p className="card-text">Tailored to your preferences and needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="card mb-4">
                            <img src="../../" className="card-img-top" alt="Same-Day Delivery" />
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
