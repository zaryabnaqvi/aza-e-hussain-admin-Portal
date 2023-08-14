import React from 'react';
import  Image  from '../../src/assets/logo.png';

const Login = () => {
    return (
        <section className="mb-5" style={{ backgroundColor: '' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src={Image}
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: '1rem 0 0 1rem',marginTop:'5rem' }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: 'red' }}></i>
                                                <span className="h1 fw-bold mb-0">AZA-E-HUSSAIN</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                                                Sign in to Manage  <i>www.aza-e-hussain.com</i>
                                            </h5>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="form2Example17"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form2Example17">
                                                    Email address
                                                </label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form2Example27"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form2Example27">
                                                    Password
                                                </label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button">
                                                    Login
                                                </button>
                                            </div>

                                            <a className="small text-muted" href="#!">
                                                Forgot password?
                                            </a>
                                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                                                Don't have an account? <a style={{ color: '#393f81' }}>Sorry but this portal is only for authorized user not outsider allowed</a>
                                            </p>
                                            <a href="#!" className="small text-muted">
                                                Terms of use.
                                            </a>
                                            <a href="#!" className="small text-muted">
                                                Privacy policy
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
