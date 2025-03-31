import React from 'react';
import { login } from '../../services/authService';

const LoginForm = () => {
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await login(email, password);
            if (response.success) {
                alert('Login successful!');
                // Lưu token và chuyển hướng
                localStorage.setItem('token', response.token);
                window.location.href = '/dashboard';
            } else {
                alert('Login failed: ' + response.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <h1>Sign In Admin</h1>
            <input type='email' name='email' placeholder='Email' required />
            <input
                type='password'
                name='password'
                placeholder='Password'
                required
            />
            <button type='submit'>Sign In</button>
        </form>
    );
};

export default LoginForm;
