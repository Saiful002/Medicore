import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-5 bg-info bg-opacity-25 f-text-style'>
            <div className="p-5">
                <div>
                    <a className="navbar-brand " href="#"><h2 className='text-center text-dark my-2 '>MEDI <span className='text-success'>CORE <i className="fas fa-hand-holding-medical text-danger"></i></span></h2></a>
                </div>
                <div className="justify-content-center text-decoration-none d-flex mt-3" >


                    <a className="text-dark" aria-current="page" href="#">Home</a>


                    <a className="text-dark" aria-current="page" href="#">Services</a>


                    <a className="text-dark" aria-current="page" href="#">About Us</a>


                    <a className="text-dark" aria-current="page" href="#">Contact Us</a>



                </div>
                <div className='text-center mt-2'>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                </div>
                <hr />
                <p className='text-center mt-5'>Copyright ©2020 MediCore. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;