import React from 'react';
import fImage from '../../../images/agussss_(9).jpg'
const Banner = () => {
    return (
        <div>
            <div>
                <h1 className='text-center fw-bold mt-5'>WELCOME TO MEDI <span className='text-success'>CORE <i className="fas fa-hand-holding-medical text-danger"></i></span></h1>
                <img src={fImage} className='img-fluid mt-3' alt="" />
            </div>
        </div>
    );
};

export default Banner;