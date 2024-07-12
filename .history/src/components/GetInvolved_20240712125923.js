import React, { useState } from 'react';
import VolunteerPic from '../../src/Image/shane-rounce-DNkoNXQti3c-unsplash.jpg';
import AdvocatePic from '../../src/Image/liam-edwards-x15GAQNepcQ-unsplash.jpg';
import EducatePic from '../../src/Image/ismael-paramo-Cns0h4ypRyA-unsplash.jpg';
import WebsiteModal from './WebsiteModal';
const GetInvolved = () => {

    function Volunteer() {
        return <img id='img' src={VolunteerPic} className="card-img-top" alt="Custom Floral Arrangements" />;
    }

    function Advocate() {
        return <img id='img' src={AdvocatePic} className="card-img-top" alt="Dance Classes" />;
    }

    function Educate() {
        return <img id='img' src={EducatePic} className="card-img-top" alt="Web Development" />;
    }

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement logic to save the email address and notify the user once volunteer positions are available
        alert('Thank you for your interest! We will notify you once volunteer positions are available.');
        setEmail('');
    };

    return (
        <>
            <section id="services" className="py-5">
                <div className="container">
                    
                    <h2 className="section-title">Our Cause</h2>
                    <p className="lead"> We are always looking for passionate individuals who are committed to making a difference. Join us in our mission to empower communities and sustain the future. </p>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <img id='img' src={VolunteerPic} className="card-img-top" alt="Custom Floral Arrangements" />
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer</h5>
                                    <p className="card-text"> Our volunteer program educates the community, shares practical knowledge, and supports a phase-out program for retiring employees/volunteers to educate future generations. </p>
                                    <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#websiteModal">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img id='img' src={AdvocatePic} className="card-img-top" alt="Dance Classes" />
                                <div className="card-body">
                                    <h5 className="card-title">Education & Advocacy</h5>
                                    <p className="card-text"> We research, develop, and implement scientifically-led methods to enhance community self-sustainability. </p>
                                    <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#websiteModal">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                    <img id='img' src={EducatePic} className="card-img-top" alt="Web Development" />
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
            <div className="modal fade" id="websiteModal" tabIndex="-1" role="dialog" aria-labelledby="websiteModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="websiteModalLabel">Organizational Restructuring</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>We are currently undergoing organizational structuring. If you are interested in volunteering, please leave your email address below and we will notify you once volunteer positions are available.</p>
                            <form onSubmit={handleSubmit}>
                                <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email address" required />
                                <button type="submit" className="btn btn-primary">Notify Me</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pop Up Modal */}
            <WebsiteModal />
        </>
    );
}

export default GetInvolved;
