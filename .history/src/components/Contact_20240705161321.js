import React from 'react';
import Info from './Info';


const Contact = () => {

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

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
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
        <section id="contact" className="bg-dark py-5">
            <div className="container text-white">
                <h1 className="text-center">Contact Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
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
                                <label for="email" className="form-label">Email</label>
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
                                <label for="message" className="form-label">Message</label>
                                
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
