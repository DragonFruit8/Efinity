import React from 'react';
import djPic from '../../src/Image/gabriel-barletta-OuLVg5ZKphI-unsplash.jpg';
import dancePic from '../../src/Image/javier-allegue-barros-55bVEzGVnzY-unsplash.jpg';
import webPic from '../../src/Image/luca-bravo-XJXWbfSo2f0-unsplash.jpg';
import WebsiteModal from './WebsiteModal';
const Services = () => {

    function dj() {
        return <img id='img' src={djPic} className="card-img-top" alt="Custom Floral Arrangements" />;
    }

    function dance() {
        return <img id='img' src={dancePic} className="card-img-top" alt="Dance Classes" />;
    }

    function webDev() {
        return <img id='img' src={webPic} className="card-img-top" alt="Web Development" />;
    }

    return (
        <>
            {/* Get Involved
Volunteer Opportunities:
Join our volunteer program to educate and empower communities. Your participation helps us achieve our mission and create lasting impacts.

Partnerships:
Partner with us to support community-driven initiatives and sustainable development. Together, we can make a significant difference.

Donate:
Support our mission with your contributions. Your donations help us fund community centers, provide educational resources, and promote sustainable practices. */}
            
            <section id="services" className="py-5">
                <div className="container">
                    
                    <h2 className="section-title">Our Services</h2>
                    <p className="lead">We offer a variety of services to empower communities and sustain the future. Join us in making a difference.</p>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                {dj()}
                                <div className="card-body">
                                    <h5 className="card-title">DJ Services</h5>
                                    <p className="card-text">Book our DJ services for your next event. Our professional DJs will keep the party going all night long.</p>
                                    <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#websiteModal">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                {dance()}
                                

            {/* Pop Up Modal */}
            <WebsiteModal />
        </>
    );
}

export default Services;
