import React from 'react';
import './Contact.css'


const Contact = () => {
    const sendHandle = () => {
        alert('Your message has been sent successfully')
    }
    return (
        <div id="contact" className="contact-bg mt-5 pt-4">
            <h2 className="text-center">Want to talk in <span style={{ color: '#7AB259' }}>more details?</span></h2>
            <div className="container contact-content">
            <div className="row pb-4">
                <div className="col-md-4 offset-md-1">
                    <h3>Let us handle your project, professionally.</h3>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 offset-md-1">
                    <form action="">
                        <input type="email" name="" className="form-control" placeholder="Your Email Address" id=""/>
                        <input type="text" name="" className="form-control my-4" placeholder="Your Name/Company's Name" id=""/>
                        <textarea id="message" className="form-control mb-4" rows="8" cols="72" placeholder="Your Message"></textarea>
                        <button className="btn btn-primary main-btn" onClick={sendHandle}>Send</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;