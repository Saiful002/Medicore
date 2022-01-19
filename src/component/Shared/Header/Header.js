import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><h2 className='text-center my-2 bg-white text-dark p-3 rounded-pill'>MEDI <span className='text-success'>CORE <i className="fas fa-hand-holding-medical text-danger"></i></span></h2></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mx-auto px-3 fs-5">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Service</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            {user.displayName || user.email ?
                                <Nav.Link as={Link} to="/logOut" onClick={logOut}><Link to='/home' className='text-white text-decoration-none'>Log Out</Link></Nav.Link> :
                                <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </Nav>
                        console.log(user)
                    </Navbar.Collapse>

                    <Navbar className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        <img className='rounded-pill ms-3 user-pic' src={user?.photoURL} alt="" />
                    </Navbar>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;