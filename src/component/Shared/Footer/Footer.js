import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-5 bg-info bg-opacity-25 f-text-style'>
            <div className="p-5">
                <div>
                    <a className="navbar-brand " href="#navbar"><h2 className='text-center text-dark my-2 '>MEDI <span className='text-success'>CORE <i className="fas fa-hand-holding-medical text-danger fs-3"></i></span></h2></a>
                </div>
                <div className="justify-content-center text-decoration-none d-flex mt-3" >

                </div>
                <div className='text-center mt-2 icon'>
                    <a href="#facebook-link"><i className="fab fa-facebook"></i></a>
                    <a href="instagram-link"><i className="fab fa-instagram"></i></a>
                    <a href="twitter-link"><i className="fab fa-twitter"></i></a>
                </div>
                <hr />
                <p className='text-center mt-5'>Copyright ©2020 MediCore. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;