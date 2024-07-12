import React from 'react';

const Info = () => {
    return (
            <div className="col-md-4 contact-info p-4">
                <h5>Contact Information</h5>
                <p>Phone: <a href="tel:+3138892915">(313) 889-2915</a></p>
                <p>Email: <a href="mailto:jtb.phoenixone@gmail.com">jtb.phoenixone@gmail.com</a></p>
                <p>Address: South East Michigan</p>
                <div class="|">
                    <h5>Follow Us</h5>
                                <p>
                    <a href="https://www.youtube.com/channel/UCGMA_ZJ0uvBKVe8IG7uaSSA" className="me-2" target="_blank" rel="noreferrer">YouTube</a> |
                    <a href="https://www.tiktok.com/@etherialphoenix" className="mx-2" target='_blank' rel='noreferrer'>TikTok</a>
                    {/* |<a href="/" className="ms-2">Twitter</a> */}
                                </p>
                </div>
            </div>
    );
};

export default Info;