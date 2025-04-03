import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGoogle,
    faFacebook,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
    const [active, setActive] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        setActive(true);
    };

    const handleLoginClick = () => {
        setActive(false);
    };

    useEffect(() => {
        setActive(false);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage('Vui lòng nhập đầy đủ email và mật khẩu!');
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:3000/auth/login',
                {
                    username: email, // Đổi từ "email" thành "username"
                    password: password
                }
            );

            const { token, refreshToken, id, msg } = response.data;

            localStorage.setItem('accessToken', token);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('userId', id);

            setMessage(msg || 'Đăng nhập thành công!');
            navigate('/admin/dashboard'); // Chuyển hướng đến trang dashboard
        } catch (error) {
            setMessage(
                error.response?.data?.msg ||
                    'Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.'
            );
        }
    };

    return (
        <div className='auth-page'>
            <div
                className={`container ${active ? 'active' : ''}`}
                id='container'
            >
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
                    <form onSubmit={handleLogin}>
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
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href='#'>Forget Your Password?</a>
                        <button type='submit'>Sign In</button>
                        {message && <p>{message}</p>}
                    </form>
                </div>

                <div className='toggle-container'>
                    <div className='toggle-2'>
                        <div className='toggle-panel toggle-left'>
                            <h1>Welcome Back!</h1>
                            <p>
                                Enter your personal details to use all of site
                                features
                            </p>
                            <button
                                className='hidden'
                                onClick={handleLoginClick}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className='toggle-panel toggle-right'>
                            <h1>Hello, Friend!</h1>
                            <p>
                                Register with your personal details to use all
                                of site features
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
        </div>
    );
};

export default Login;
