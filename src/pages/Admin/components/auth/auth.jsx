import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGoogle,
    faFacebook,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [active, setActive] = useState(false);

    const handleRegisterClick = () => {
        setActive(true);
    };

    const handleLoginClick = () => {
        setActive(false);
    };

    return (
        <div className={`container ${active ? 'active' : ''}`} id='container'>
            <div className='form-container sign-up'>
                <form>
                    <h1>Create Account</h1>
                    <div className='social-icons'>
                        <a href='#' className='icon'>
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href='#' className='icon'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href='#' className='icon'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href='#' className='icon'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>

                    <span>Or use your email for registration</span>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <button>Sign Up</button>
                </form>
            </div>

            <div className='form-container sign-in'>
                <form>
                    <h1>Sign In Admin</h1>
                    <div className='social-icons'>
                        <a href='#' className='icon'>
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href='#' className='icon'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href='#' className='icon'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href='#' className='icon'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                    <span>or use your email password</span>
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <a href='#'>Forget Your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>

            <div className='toggle-container'>
                <div className='toggle'>
                    <div className='toggle-panel toggle-left'>
                        <h1>Welcome Back!</h1>
                        <p>
                            Enter your personal details to use all of site
                            features
                        </p>
                        <button className='hidden' onClick={handleLoginClick}>
                            Sign In
                        </button>
                    </div>
                    <div className='toggle-panel toggle-right'>
                        <h1>Hello, Friend!</h1>
                        <p>
                            Register with your personal details to use all of
                            site features
                        </p>
                        <button
                            className='hidden'
                            onClick={handleRegisterClick}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
