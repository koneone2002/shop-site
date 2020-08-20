import React, { useState } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

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
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          label='email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          label='password'
          required
        />

        <CustomButton type='submit'>Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
