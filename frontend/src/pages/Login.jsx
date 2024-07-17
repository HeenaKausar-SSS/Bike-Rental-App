import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    if (!email.includes('@')) {
      formErrors.email = 'Invalid email address';
    }

    if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', { email, password });
      // Authentication logic here
    }
  };

  return (
    <div className="login">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
