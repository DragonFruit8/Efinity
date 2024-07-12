import React from 'react';
import spiralPic from '../../src/Image/Spiral.webp';

function spiral() {
    return <img id='aboutImg' src={spiralPic} className="img-fluid" alt="About Us" />;
}

const About = () => {
    return (
        <>
            {/*
Based on the provided mission brief and your requirements, here's a structured website copy designed to help users understand and engage with your organization effectively. Each page is crafted to ensure a seamless user flow and clear communication of participation opportunities. The roadmap section is included to guide users on the journey with your organization.

Home Page
Welcome to E-Finity

Mission Statement:
"Promoting effective operational functionality in startups, driving philanthropic efforts, and facilitating community education through local leadership."

Join Us in Making a Difference:
Discover how E-Finity is transforming communities through sustainable practices, innovative business models, and community-driven initiatives.

Get Involved

[Join Our Community]
[Volunteer Opportunities]
[Partner with Us]
Learn More

[Our Mission & Vision]
[Our Impact]
[Upcoming Events]
About Us
Our Mission:
E-Finity is dedicated to promoting effective operational functionality in startups, driving philanthropic efforts, and facilitating community education through local leadership. Our goal is to bridge established businesses with new ventures, fostering mutually beneficial practices and sustainable development.

Our Vision:
We aim to strategically establish community centers that encourage sustainability, environmental enrichment, and best practices for peaceful cohabitation.

Global Reach:
By providing skill training and fostering partnerships, we bridge the gap between corporations and communities, creating appealing startup models and promoting global sustainability.

Funding Opportunities:
Learn about our efforts to achieve 501(c)(3) status, support initial startup costs, and provide a basic monthly income allowance to ensure a minimal standard of living. */}
            <section id="about" className="py-5 bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className='mb-4'>About Us</h1>
                            <p>E-Finity is dedicated to promoting effective operational functionality in startups, driving philanthropic efforts, and facilitating community education through local leadership. Our goal is to bridge established businesses with new ventures, fostering mutually beneficial practices and sustainable development.</p>

                            <p>We aim to strategically establish community centers that encourage sustainability, environmental enrichment, and best practices for peaceful cohabitation.</p>

                            <p>By providing skill training and fostering partnerships, we bridge the gap between corporations and communities, creating appealing startup models and promoting global sustainability.</p>

                            <p>Learn about our efforts to achieve 501(c)(3) status, support initial startup costs, and provide a basic monthly income allowance to ensure a minimal standard of living.</p>
                        </div>
                        <div className="col-lg-6">
                            {spiral()}
                        </div>
                    </div>
                </div>
            </section>
            {/* Roadmap */}
                
            
        {/* // <section id="about" className="py-5 bg-dark text-white">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-lg-6">
        //                 <h1 className='mb-4'>About Us</h1>
        //                 <p>Growing up in a world where education was cherished but financial abundance was scarce, I've come to understand the true essence of resilience. My journey is a testament to the power of the underdog—a story that deserves to be honored and shared.</p>

        //                 <p>At Dark Phoenix Rising, I am dedicated to co-creating with humanity, forging paths where our mutual stories of struggle and triumph can find their voice. Emerging from the ashes of a dark past, I discovered my inner desire for music, technology, and visionary creativity.</p>

        //                 <p>Just as the Phoenix rises, so too can we, together, transform our adversities into beautiful symphonies of success. Join me in this journey, and let's empower each other to reach new heights.</p>
        //             </div>
        //             <div className="col-lg-6">
        //                 {spiral()}
        //             </div>
        //         </div>
        //     </div>
        // </section> */}
        </>
    );
}

export default About;
