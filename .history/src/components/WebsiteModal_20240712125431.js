import React, { useState } from 'react';
import ClientForm from './ClientForm';

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
        <div>
            <h2>Organizational Restructuring</h2>
            <p>We are currently undergoing organizational structuring. If you are interested in volunteering, please leave your email address below and we will notify you once volunteer positions are available.</p>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email address" required />
                <button type="submit">Notify Me</button>
            </form>
        </div>
    );
};

export default WebsiteModal;