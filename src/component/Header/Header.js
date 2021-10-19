import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info bg-opacity-50">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h2 className='text-center my-2'>MEDI <span className='text-success'>CORE <i className="fas fa-hand-holding-medical text-danger"></i></span></h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center item-style" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services"><a className="nav-link active" aria-current="page" href="#">Services</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about"><a className="nav-link active" aria-current="page" href="#">About Us</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"><a className="nav-link active" aria-current="page" href="#">Contact Us</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login"><a className="nav-link active" aria-current="page" href="#">LogIN</a></Link>
                            </li>
                            {user?.displayName &&
                                <li onClick={logOut} className="nav-item">
                                    <Link to="/logout"><a className="nav-link active" aria-current="page" href="#">LogOut</a></Link>
                                </li>}
                            <li className="nav-item">
                                <Link to="/register"><a className="nav-link active" aria-current="page" href="#">Register </a></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;