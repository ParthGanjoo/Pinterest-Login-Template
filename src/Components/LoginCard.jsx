import React, { useState } from 'react';
import '../Styles/LoginCard.css';
import LoginLogo from '../Assets/Logo (5).png';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Check for specific email and password
      if (email === 'khushi@dumdum.com' && password === 'dumdum') {
        // Redirect to Google.com
        window.location.href = 'https://home.pinterest.me';
      } else {
        alert('Invalid email or password');
      }
    }
  };

  const validate = () => {
    const error = {};

    if (!email) {
      error.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = 'Invalid email format';
    }

    if (!password) {
      error.password = 'Password is required';
    } else if (password.length < 2) {
      error.password = 'Password must be at least 2 characters';
    }

    return error;
  };

  return (
    <div className='container'>
      <div className='form_container'>
        <div className='LoginLogo'>
          <img src={LoginLogo} width={40} />
        </div>
        <h2>Welcome to Pinterest</h2>
        <h4>for Khushi</h4>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            {errors.email && <div className='error'>{errors.email}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
            {errors.password && <div className='error'>{errors.password}</div>}
          </div>
          <button type='submit'>Login</button>
        </form>
        <a>Forgot your password? Your loss. We can't help.</a>
      </div>
    </div>
  );
}

export default Form;
