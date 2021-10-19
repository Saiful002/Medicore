import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <h1 className="title text-center mt-5">CONTACT US</h1>
            <div className="row mx-5 my-5 contact-style text-center">
                <div className="col-md-4">
                    <h2 className="text-primary">Address <i className="fas fa-map-marker-alt"></i></h2>
                    <h4>297 Central Street, London City,UK</h4>
                </div>
                <div className="col-md-4">
                    <h2 className="text-primary">Phone <i className="fas fa-phone"></i></h2>
                    <a href="">+5548 254 658</a> <br />
                    <a href="">+55575 587 478</a>
                </div>
                <div className="col-md-4">
                    <h2 className="text-primary ">Web <i className="fas fa-globe"></i></h2>
                    <a href="">info@example.com</a> <br />
                    <a href="">www.example.com</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;