import React, { useState } from 'react';
import '../Styles/LoginCard.css';
import LoginLogo from '../Assets/Logo (5).png';

// Change the logo to friend's initial for a personal touch

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      // Change Email and Password to anything you like

      if (email === 'hello@example.com' && password === 'hello') {
        window.location.href = 'https://pinterestforfriend.vercel.app/';
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

        {/* // Add name of friend in place of *Name* */}

        <h4>for *Name*</h4>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>

            {/* // Remove *hello@example.com* and *hello*, they are just a part of the template */}

            <label htmlFor='email'>Email Address *hello@example.com*</label>
            <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            {errors.email && <div className='error'>{errors.email}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password *hello*</label>
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
