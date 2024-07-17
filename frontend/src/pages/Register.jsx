import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.email.includes('@')) {
      formErrors.email = 'Invalid email address';
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.password = 'Passwords do not match';
    }

    if (!formData.terms) {
      formErrors.terms = 'You must accept the terms and conditions';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const registerUser = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Simulating an API call to register the user
        const response = await axios.post('http://localhost:3000/register', formData);
        const { token } = response.data;

        // Save the JWT to local storage
        localStorage.setItem('token', token);

        // Decode the token and save user details to local storage
        const decoded = {jwtDecode}(token);
        localStorage.setItem('user', JSON.stringify(decoded));

        // Redirect to login page or dashboard after successful registration
        navigate('/login');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  };

  return (
    <div className="register">
      <h1>REGISTER HERE</h1>
      <form onSubmit={registerUser}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            I accept the terms and conditions
          </label>
          {errors.terms && <span>{errors.terms}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
