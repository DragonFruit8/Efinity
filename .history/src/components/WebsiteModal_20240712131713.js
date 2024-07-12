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
        <script id="mcjs">!function(c,h,i,m,p){m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore(m, p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/ce65e485c4fec598ef9ddedc0/08ee4395665156441c4f7c18b.js");</script>
    );
};

export default WebsiteModal;