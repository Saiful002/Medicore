import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { handleGoogleSignIn, registerEmail, registerPassword, handleRegistration, error } = useAuth()
    return (
        <div className='container mt-5'>
            <form onSubmit={handleRegistration} className="row g-3 bg-secondary p-3 text-white">
                <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input onBlur={registerEmail} type="email" className="form-control" id="inputEmail4" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input onBlur={registerPassword} type="password" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option select="true">Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Register</button>


                </div>
                <div className="col-12">
                    <Link to='/login'><a className='text-warning text-decoration-none'>Already Have An Account?</a></Link>
                </div>
                <div>
                    <p className="text-danger">{error}</p>
                </div>
            </form>
            <div className="mt-3 text-center fw-bold fs-4">
                <p>OR</p>
            </div>
            <div className=' d-flex justify-content-center'>
                <button onClick={handleGoogleSignIn} type="submit" className="btn btn-warning"><i className="fab fa-google"></i> Google SignIn</button>
            </div>
        </div>
    );
};

export default Register;