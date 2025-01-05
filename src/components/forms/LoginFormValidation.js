import React, { useState } from 'react';

const LoginFormValidation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p>{errors.email}</p>}
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p>{errors.password}</p>}
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginFormValidation;
