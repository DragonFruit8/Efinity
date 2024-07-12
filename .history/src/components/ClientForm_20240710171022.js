import React, { useState } from 'react';
import emailjs from 'emailjs-com';
const dotenv = require('dotenv').config();

const ClientForm = () => {

    const [url, setUrl] = useState('');

    const handleURL = (e) => {
        let inputValue = e.target.value;

        // Check if the input starts with 'https://' already
        if (!inputValue.startsWith('https://')) {
            // If not, prepend 'https://'
            inputValue = 'https://'
        }

        // Update state with the modified value
        setUrl(inputValue);
    };

    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        businessName: '',
        businessType: '',
        businessAddress: '',
        city: '',
        state: '',
        zip: '',
        businessMission: '',
        businessVision: '',
        businessSlogan: '',
        url: '',
        services: [],
        pages: {
            home: false,
            about: false,
            servicesPage: false,
            products: false,
            contact: false,
            blog: false,
            gallery: false,
            testimonials: false,
            faqs: false
        },
        additionalNotes: ''
    };
    const [formData, setFormData] = useState(initialFormData);
    const serviceID = ;
    const templateID = process.env.TEMPLATEID;
    const userID = process.env.USERID;

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'services') {
            if (checked) {
                setFormData(prevData => ({
                    ...prevData,
                    services: [...prevData.services, value]
                }));
            } else {
                setFormData(prevData => ({
                    ...prevData,
                    services: prevData.services.filter(service => service !== value)
                }));
            }
        } else if (name.startsWith('pages')) {
            const pageKey = name.split('_')[1];
            setFormData(prevData => ({
                ...prevData,
                pages: {
                    ...prevData.pages,
                    [pageKey]: checked
                }
            }));
            // If checked, value equals Yes, else No
            setFormData(prevData => ({
                ...prevData,
                [pageKey]: checked ? 'Yes' : ''
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent!');
                setFormData(initialFormData); // Reset form state
                e.target.reset(); // Reset HTML form
                // Hide Modal
                const modal = document.getElementById('ClientForm');
                const modalBS = this.Modal.getInstance(modal);
                modalBS.hide();
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });
    };

    const stateAB = [
        // List of American States
        { name: 'Alabama', abbreviation: 'AL' },
        { name: 'Alaska', abbreviation: 'AK' },
        { name: 'Arizona', abbreviation: 'AZ' },
        { name: 'Arkansas', abbreviation: 'AR' },
        { name: 'California', abbreviation: 'CA' },
        { name: 'Colorado', abbreviation: 'CO' },
        { name: 'Connecticut', abbreviation: 'CT' },
        { name: 'Delaware', abbreviation: 'DE' },
        { name: 'Florida', abbreviation: 'FL' },
        { name: 'Georgia', abbreviation: 'GA' },
        { name: 'Hawaii', abbreviation: 'HI' },
        { name: 'Idaho', abbreviation: 'ID' },
        { name: 'Illinois', abbreviation: 'IL' },
        { name: 'Indiana', abbreviation: 'IN' },
        { name: 'Iowa', abbreviation: 'IA' },
        { name: 'Kansas', abbreviation: 'KS' },
        { name: 'Kentucky', abbreviation: 'KY' },
        { name: 'Louisiana', abbreviation: 'LA' },
        { name: 'Maine', abbreviation: 'ME' },
        { name: 'Maryland', abbreviation: 'MD' },
        { name: 'Massachusetts', abbreviation: 'MA' },
        { name: 'Michigan', abbreviation: 'MI' },
        { name: 'Minnesota', abbreviation: 'MN' },
        { name: 'Mississippi', abbreviation: 'MS' },
        { name: 'Missouri', abbreviation: 'MO' },
        { name: 'Montana', abbreviation: 'MT' },
        { name: 'Nebraska', abbreviation: 'NE' },
        { name: 'Nevada', abbreviation: 'NV' },
        { name: 'New Hampshire', abbreviation: 'NH' },
        { name: 'New Jersey', abbreviation: 'NJ' },
        { name: 'New Mexico', abbreviation: 'NM' },
        { name: 'New York', abbreviation: 'NY' },
        { name: 'North Carolina', abbreviation: 'NC' },
        { name: 'North Dakota', abbreviation: 'ND' },
        { name: 'Ohio', abbreviation: 'OH' },
        { name: 'Oklahoma', abbreviation: 'OK' },
        { name: 'Oregon', abbreviation: 'OR' },
        { name: 'Pennsylvania', abbreviation: 'PA' },
        { name: 'Rhode Island', abbreviation: 'RI' },
        { name: 'South Carolina', abbreviation: 'SC' },
        { name: 'South Dakota', abbreviation: 'SD' },
        { name: 'Tennessee', abbreviation: 'TN' },
        { name: 'Texas', abbreviation: 'TX' },
        { name: 'Utah', abbreviation: 'UT' },
        { name: 'Vermont', abbreviation: 'VT' },
        { name: 'Virginia', abbreviation: 'VA' },
        { name: 'Washington', abbreviation: 'WA' },
        { name: 'West Virginia', abbreviation: 'WV' },
        { name: 'Wisconsin', abbreviation: 'WI' },
        { name: 'Wyoming', abbreviation: 'WY' },
        { name: 'District of Columbia', abbreviation: 'DC ' }
    ];

   
    return (
            <div className="container">
                <h2 className="mt-4 mb-4">Client Information Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Client Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="businessName" className="form-label">Business Name:</label>
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="businessAddress" className="form-label">Business Address:</label>
                    <input
                        type="text"
                        id="businessAddress"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State:</label>
                    <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-select"
                        required
                    >
                        <option value="">Select State</option>
                        {stateAB.map(state => (
                            <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessType" className="form-label">Business Type:</label>
                    <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="form-select"
                        required
                    >
                        <option value="">Select Business Type</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="retail">Retail Store</option>
                        <option value="tech">Technology</option>
                        <option value="services">Services</option>
                        <option value="nonprofit">Non-Profit</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="urlInput" className="form-label">Website (if applicable):</label>
                    <br />
                    <input
                        type="text"
                        id="urlInput"
                        value={url}
                        onChange={handleURL}
                        placeholder="Enter URL starting with 'https://'"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="businessMission" className="form-label">Business Mission:</label>
                    <textarea
                        id="businessMission"
                        name="businessMission"
                        value={formData.businessMission}
                        onChange={handleChange}
                        className="form-control"
                        rows="2"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="businessVision" className="form-label">Business Vision:</label>
                    <textarea
                        id="businessVision"
                        name="businessVision"
                        value={formData.businessVision}
                        onChange={handleChange}
                        className="form-control"
                        rows="2"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="businessSlogan" className="form-label">Business Slogan:</label>
                    <input
                        type="text"
                        id="businessSlogan"
                        name="businessSlogan"
                        value={formData.businessSlogan}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <fieldset className="mb-3">
                    <legend>Services Interested In:</legend>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="websiteDesign"
                            name="services"
                            value="websiteDesign"
                            checked={formData.services.includes('websiteDesign')}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="websiteDesign" className="form-check-label">Website Design</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="seoServices"
                            name="services"
                            value="seoServices"
                            checked={formData.services.includes('seoServices')}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="seoServices" className="form-check-label">SEO Services</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="socialMedia"
                            name="services"
                            value="socialMedia"
                            checked={formData.services.includes('socialMedia')}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="socialMedia" className="form-check-label">Social Media Marketing</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="ecommerceSolutions"
                            name="services"
                            value="ecommerceSolutions"
                            checked={formData.services.includes('ecommerceSolutions')}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="ecommerceSolutions" className="form-check-label">E-commerce Solutions</label>
                    </div>
                </fieldset>

                <fieldset className="mb-3">
                    <legend>Website Pages Needed:</legend>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="home"
                            name="pages_home"
                            checked={formData.pages.home}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="home" className="form-check-label">Home Page</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="about"
                            name="pages_about"
                            checked={formData.pages.about}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="about" className="form-check-label">About Us</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="servicesPage"
                            name="pages_servicesPage"
                            checked={formData.pages.servicesPage}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="servicesPage" className="form-check-label">Services</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="products"
                            name="pages_products"
                            checked={formData.pages.products}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="products" className="form-check-label">Products</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="contact"
                            name="pages_contact"
                            checked={formData.pages.contact}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="contact" className="form-check-label">Contact Us</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="blog"
                            name="pages_blog"
                            checked={formData.pages.blog}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="blog" className="form-check-label">Blog</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="gallery"
                            name="pages_gallery"
                            checked={formData.pages.gallery}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="gallery" className="form-check-label">Gallery</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="testimonials"
                            name="pages_testimonials"
                            checked={formData.pages.testimonials}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="testimonials" className="form-check-label">Testimonials</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="faqs"
                            name="pages_faqs"
                            checked={formData.pages.faqs}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="faqs" className="form-check-label">FAQs</label>
                    </div>
                </fieldset>

                <div className="mb-3">
                    <label htmlFor="additionalNotes" className="form-label">Additional Notes or Requirements:</label>
                    <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
    );
};

export default ClientForm;
