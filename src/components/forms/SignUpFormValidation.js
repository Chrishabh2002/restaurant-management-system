import React, { useState } from 'react';

const SignUpFormValidation = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!username) newErrors.username = "Username is required";
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
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            {errors.username && <p>{errors.username}</p>}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p>{errors.email}</p>}
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p>{errors.password}</p>}
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpFormValidation;
