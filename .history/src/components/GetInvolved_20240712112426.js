import React from 'react';
import VolunteerPic from '../../src/Image/gabriel-barletta-OuLVg5ZKphI-unsplash.jpg';
import AdvocatePic from '../../src/Image/liam-edwards-x15GAQNepcQ-unsplash.jpg';
import webPic from '../../src/Image/luca-bravo-XJXWbfSo2f0-unsplash.jpg';
import WebsiteModal from './WebsiteModal';
const GetInvolved = () => {

    function Volunteer() {
        return <img id='img' src={VolunteerPic} className="card-img-top" alt="Custom Floral Arrangements" />;
    }

    function Advocate() {
        return <img id='img' src={AdvocatePic} className="card-img-top" alt="Dance Classes" />;
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
                                {Volunteer()}
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer</h5>
                                    <p className="card-text"> Our volunteer program educates the community, shares practical knowledge, and supports a phase-out program for retiring employees/volunteers to educate future generations. </p>
                                    <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#websiteModal">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                {dance()}
                                <div className="card-body">
                                    <h5 className="card-title">Education & Advocacy</h5>
                                    <p className="card-text"> We research, develop, and implement scientifically-led methods to enhance community self-sustainability. </p>
                                    <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#websiteModal">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                {webDev()}
                                <div className="card-body">
                                    <h5 className="card-title">Sustainability & Community Impact</h5>
                                    <p className="card-text"> We focus on environmental research and transforming viable environments to provide standard nutrition sources for the local community. </p>
                                    <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#websiteModal">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pop Up Modal */}
            <WebsiteModal />
        </>
    );
}

export default GetInvolved;
