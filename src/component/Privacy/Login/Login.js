import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Login = () => {
    const { handleGoogleSignIn, handleLogIn, loginEmail, loginPassword, error } = useAuth()
    return (
        <div>
            <form onSubmit={handleLogIn} className='container my-5 bg-success p-3 text-white'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={loginEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={loginPassword} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">LogIn</button>
                <br />
                <div className="mt-3"><Link to='/register'><a href='click' className='text-warning text-decoration-none'>Don't Have Account? Register Now</a></Link></div>
                <div>
                    <p className="text-danger">{error}</p>
                </div>
                <div className="mt-3 text-center fw-bold fs-4">
                    <p>OR</p>
                </div>

            </form>
            <div className=' d-flex justify-content-center'>
                <button onClick={handleGoogleSignIn} type="submit" className="btn btn-warning"><i className="fab fa-google"></i> Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;