import React from 'react';
import djPic from '../../src/Image/gabriel-barletta-OuLVg5ZKphI-unsplash.jpg';
import dancePic from '../../src/Image/javier-allegue-barros-55bVEzGVnzY-unsplash.jpg';
import webPic from '../../src/Image/luca-bravo-XJXWbfSo2f0-unsplash.jpg';
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
                                <h5 className="card-title">DJ Service</h5>
                                <p className="card-text"> Celebrate in style and create your own rhythm</p>
                                <button className="btn btn-custom mb-2">REQUEST QUOTE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="card mb-4">
                            {webDev()}
                            <div className="card-body">
                                <h5 className="card-title">Website Development</h5>
                                <p className="card-text">Support yourself with a website for your clients</p>
                                <button className="btn btn-custom mb-2" onClick={
                                    () => {
                                        window.open("https://form.jotform.com/233604899004156", "_blank");
                                    }
                                }>SUBMIT INTEREST</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        {dance()}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Ballroom Lessons</h5>
                                <p className="card-text">Consultation and design services available.</p>
                                <button className="btn btn-custom mb-2" onClick={() => {
                                    window.open("https://form.jotform.com/233604899004156", "_blank");
                                }   
                                    GET FIRST DANCE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
