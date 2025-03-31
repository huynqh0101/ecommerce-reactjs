import React from 'react';

const RegisterForm = () => {
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log('Registering:', { name, email, password });
        // Gửi dữ liệu đến API đăng ký
    };

    return (
        <form onSubmit={handleRegisterSubmit}>
            <h1>Create Account</h1>
            <input type='text' name='name' placeholder='Name' required />
            <input type='email' name='email' placeholder='Email' required />
            <input
                type='password'
                name='password'
                placeholder='Password'
                required
            />
            <button type='submit'>Sign Up</button>
        </form>
    );
};

export default RegisterForm;
