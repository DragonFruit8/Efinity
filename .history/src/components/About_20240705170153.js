import React from 'react';
import spiralPic from '../../src/Image/Spiral.webp';

function spiral() {
    return <img id='aboutImg' src={spiralPic} className="img-fluid" alt="About Us" />;
}

const About = () => {
    return (
        <section id="about" className="py-5 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='mb-4'>About Us</h1>
                        <p>Growing up in a world where education was cherished but financial abundance was scarce, I've come to understand the true essence of resilience. My journey is a testament to the power of the underdog—a story that deserves to be honored and shared.</p>

                        <p>At Dark Phoenix Rising, I am dedicated to co-creating with humanity, forging paths where our mutual stories of struggle and triumph can find their voice. Emerging from the ashes of a dark past, I discovered my inner desire for music, technology, and visionary creativity.</p>

                        <p>Just as the Phoenix rises, so too can we, together, transform our adversities into beautiful symphonies of success. Join me in this journey, and let's empower each other to reach new heights.</p>
                    </div>
                    <div className="col-lg-6">
                        {spiral()}
                    </div>
                </div>
            </div>
        </section>
        <!-- Google tag(gtag.js)-- >
<script async src="https://www.googletagmanager.com/gtag/js?id=G-41YSGDEZYG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-41YSGDEZYG');
</script>
    );
}

export default About;
