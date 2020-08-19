import React, { useState } from 'react';

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { email, password } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    //console.log(email, password);
    setUser({
      email: '',
      password: ''
    });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmit}>
        <input
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          label='email'
          required
        />
        <label>Email</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          label='password'
          required
        />
        <label>Password</label>
        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
};

export default SignIn;
