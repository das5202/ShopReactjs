import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../Styles/Login.css';
import Header from './Header';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({ email: '', password: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const history = useHistory();

  const handleLogin = () => {
    let hasError = false;
    const errors = { email: '', password: '' };

    if (!email) {
      errors.email = 'Please enter your email';
      hasError = true;
    }

    if (!password) {
      errors.password = 'Please enter your password';
      hasError = true;
    }

    if (hasError) {
      setErrorMessages(errors);
      setSuccessMessage('');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = existingUsers.find(
      (user) => user.email.trim() === email.trim() && user.password === password
    );

    if (user) {
      localStorage.setItem('isLoggedIn', true);
      setEmail('');
      setPassword('');
      setErrorMessages({ email: '', password: '' });
      setSuccessMessage('Login successful!');
      history.push('/'); // Redirect to the home page after successful login
    } else {
      setErrorMessages({ email: 'Invalid email', password: 'Invalid password' });
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-form">
      
      <h1>Login form</h1>
      {errorMessages.email && <p className="error">{errorMessages.email}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errorMessages.password && <p className="error">{errorMessages.password}</p>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {successMessage && <p className="success">{successMessage}</p>}
      <button onClick={handleLogin}>Login</button>
      <div className="register-message">
        Not registered yet? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default LoginForm;
