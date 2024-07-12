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
        {/*  */}
            {/* Pop Up Modal */}
            <WebsiteModal />
        </>
    );
}

export default Services;
