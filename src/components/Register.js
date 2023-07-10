import React, { useState } from 'react';
import '../Styles/Register.css';
import Header from './Header';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = () => {
    const errors = [];
  
    if (!name) {
      errors.push({ field: 'name', message: 'Please enter your name' });
    }
  
    if (!email) {
      errors.push({ field: 'email', message: 'Please enter your email' });
    } else if (!validateEmail(email)) {
      errors.push({ field: 'email', message: 'Invalid email format' });
    }
  
    if (!password) {
      errors.push({ field: 'password', message: 'Please enter a password' });
    } else if (!validatePassword(password)) {
      errors.push({
        field: 'password',
        message:
          'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
      });
    }
  
    if (!confirmPassword) {
      errors.push({
        field: 'confirmPassword',
        message: 'Please confirm your password',
      });
    } else if (password !== confirmPassword) {
      errors.push({ field: 'confirmPassword', message: 'Passwords do not match' });
    }
  
    if (!mobileNumber) {
      errors.push({ field: 'mobileNumber', message: 'Please enter your mobile number' });
    } else if (!validatePhoneNumber(mobileNumber)) {
      errors.push({ field: 'mobileNumber', message: 'Invalid phone number format' });
    }
  
    if (errors.length > 0) {
      setErrorMessages(errors);
      setSuccessMessage('');
      return;
    }
  
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isUserExists = existingUsers.some((user) => user.email.trim() === email.trim());
  
    if (isUserExists) {
      setErrorMessages([{ field: 'email', message: 'Email already registered' }]);
      setSuccessMessage('');
      return;
    }
  
    // Registration logic
    const newUser = {
      name: name,
      email: email,
      password: password,
      mobileNumber: mobileNumber,
    };
  
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setMobileNumber('');
    setErrorMessages([]);
    setSuccessMessage('Registration successful!');
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div className="registration-form">
      
      <h2>Registration</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errorMessages.map((error) =>
        error.field === 'name' ? (
          <p key={error.field} className="error">
            {error.message}
          </p>
        ) : null
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errorMessages.map((error) =>
        error.field === 'email' ? (
          <p key={error.field} className="error">
            {error.message}
          </p>
        ) : null
      )}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessages.map((error) =>
        error.field === 'password' ? (
          <p key={error.field} className="error">
            {error.message}
          </p>
        ) : null
      )}
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errorMessages.map((error) =>
        error.field === 'confirmPassword' ? (
          <p key={error.field} className="error">
            {error.message}
          </p>
        ) : null
      )}
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      {errorMessages.map((error) =>
        error.field === 'mobileNumber' ? (
          <p key={error.field} className="error">
            {error.message}
          </p>
        ) : null
      )}
      <button onClick={handleRegister}>Register</button>
      <div className="login-message">
        Already registered? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
