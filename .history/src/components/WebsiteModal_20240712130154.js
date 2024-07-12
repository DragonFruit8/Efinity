import React, { useState } from 'react';


const WebsiteModal = () => {
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
        <div className="modal fade" id="websiteModal" tabIndex="-1" role="dialog" aria-labelledby="websiteModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="websiteModalLabel">Organizational Restructuring</h5>

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
    );
};

export default WebsiteModal;