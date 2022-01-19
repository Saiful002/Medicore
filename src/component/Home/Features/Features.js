import React from 'react';

import './Features.css'
const Features = () => {
    return (
        <div>

            <div>
                <h1 className='text-center fw-bold mt-5'>OUR FEATURES</h1>
                <div className="row mt-5 container">
                    <div className="col-md-4 d-flex">
                        <i className="far fa-eye mx-4 icon text-info"></i>
                        <span>
                            <h3>Emergency Care</h3>
                            <p>Emergency Care is an essential part of the health system and serves as the first point of contact for many around the world. </p>
                        </span>
                    </div>
                    <div className="col-md-4 d-flex">
                        <i className="fas fa-heartbeat icon mx-4 text-danger"></i>
                        <span>
                            <h3>Operation Theater</h3>
                            <p>An operating theater (also known as an operating room (OR), operating suite, or operation suite) is a facility within a hospital where surgical operations are carried out in an aseptic environment. </p>
                        </span>
                    </div>
                    <div className="col-md-4 d-flex">
                        <i className="fas fa-ribbon icon mx-4 text-primary"></i>
                        <span>
                            <h3>Pharmacy</h3>
                            <p>A pharmacy (also called "drugstore" in American English or "community pharmacy" or "chemist" in Commonwealth English, or rarely, apothecary) is a retail shop which provides pharmaceutical drugs, among other products.</p>
                        </span>
                    </div>
                    <div className="col-md-4 d-flex">
                        <i className="fas fa-brain icon text-warning mx-4"></i>
                        <span>
                            <h3>Outdoor Checkup</h3>
                            <p>Outdoor Checkup. Home Service Outdoor Checkup. Refraction · </p>
                        </span>
                    </div>
                    <div className="col-md-4 d-flex">
                        <i className="fas fa-vial text-success icon mx-4"></i>
                        <span>
                            <h3>Blood Test</h3>
                            <p>A blood test usually involves taking a blood sample from a blood vessel in your arm. The arm is a convenient part of the body to use because it can be easily . </p>
                        </span>
                    </div>
                    <div className="col-md-4 d-flex">
                        <i className="fas fa-ambulance text-danger icon mx-4"></i>
                        <span>
                            <h3>24/7 Ambulance</h3>
                            <p>Standby Ambulance Emergency Services. At ForeMost Base Hospitals, Our Ambulance Services is expertly staffed by licensed Paramedics.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;