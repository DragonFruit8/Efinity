import React from 'react';
import Info from './Info';


const Contact = () => {
    return (
        <section id="contact" className="bg-light py-5">
            <div className="container">
                <h2 className="text-center">Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-custom">Submit</button>
                        </form>
                    </div>
                    <Info />
                </div>
            </div>
        </section>
    );
}

export default Contact;
