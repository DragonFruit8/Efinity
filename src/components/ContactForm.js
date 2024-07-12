import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xsh4h3c', 'template_gtikp6g', e.target, 'DPhU96HXd5sAwVE5C')
            .then((result) => {
                console.log(result.text);
                alert('Message Sent!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="bg-light py-5">
            <div className="container">
                <h2 className="text-center">Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-custom">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6 contact-info">
                        <h5>Contact Information</h5>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@bloomingjoyflorist.com</p>
                        <p>Address: 123 Flower St, City, State, ZIP</p>
                        <h5>Follow Us</h5>
                        <p>
                            <a href="/">Facebook</a> |
                            <a href="/">Instagram</a> |
                            <a href="/">Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
