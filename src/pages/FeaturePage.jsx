import React from 'react';
import {useForm} from 'react-hook-form';

import logo from '../assets/images/Logo.svg';
// import iphone from '';

// import * as constants from './constants';

// eslint-disable-next-line
export default () => {
  const [submitted, setSubmitted] = React.useState(false);
  const {register, handleSubmit, formState: {errors, isValid}, setError} = useForm({
    defaultValues: {
      platforms: [],
    },
  });

  const onSubmit = async ({email, platforms}) => {
    try {
      await fetch(`${constants.API_URL}/v1/register`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({email, platforms: JSON.stringify(platforms)}),
      });
      setSubmitted(true);
    } catch (e) {
      setError('email', {type: 'custom', message: 'unknown error encountered'});
    }
  };

  if (submitted) {
    return (
      <div className='flex flex-col justify-center items-center bg-gray-100 p-16 h-full'>
        <img src={logo} className='w-32 mb-12' alt='logo' />
        <p className='text-center max-w-md text-lg mb-2'>Thank you for joining our waitlist. We'll send you a test link shortly.</p>
      </div>
    );
  }


  return (
    <div className='sm:grid sm:grid-cols-2 h-full'>
      <div className='flex flex-col bg-gray-100 p-12 sm:p-16'>
        <img src={logo} className='w-32 mb-12 mx-auto sm:mx-0' alt='logo' />
        <div className='flex-grow flex flex-row items-center justify-center max-w-sm mx-auto'>
          {/* <img src={iphone} alt='qwerki app screenshot' /> */}
        </div>
      </div>
      <div className='flex flex-col justify-center space-y-8 text-slate-800 p-12 sm:p-16'>
        <h1 className='text-3xl sm:text-4xl'>Never forget.</h1>
        <p className='sm:text-lg'>Effortlessly store and retrieve your notes, tasks and reminders.</p>
        <p className='sm:text-lg'>Join the waitlist for early access to Qwerki and play a vital role in shaping its features and functionality.</p>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm'>
          <div className='mb-5'>
            <label className='block text-black text-sm font-bold mb-1' htmlFor='email'>Email</label>
            <input
              className={
                errors.email
                  ? 'bg-black text-white leading-tight focus:outline-none focus:shadow-outline px-3 py-2 border-2 border-pink-600 rounded-xl w-full'
                  : 'bg-black text-white leading-tight focus:outline-none focus:shadow-outline px-3 py-2 border-2 border-white rounded-xl w-full'
              }
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              {...register('email', {
                required: true,
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email address must be a valid address',
                },
              })}
            />
            {errors.email && <div className='text-sm text-pink-600 mx-2'>{errors.email.message}</div>}
          </div>
          <div className='mb-5'>
            <label className='block text-black text-sm font-bold mb-1'>Platforms</label>
            <div className='flex flex-row flex-wrap justify-start items-center'>
              {['iOS', 'macOS', 'Android', 'Web', 'Win'].map((p, i) => (
                <label className='block text-black mr-3' key={i}>
                  <input
                    className='mr-1 leading-tight accent-black'
                    type='checkbox'
                    name='platforms'
                    value={p}
                    {...register('platforms')}
                  />
                  <span className='text-sm'>{p}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            type='submit'
            disabled={isValid !== true}
            className='bg-black text-white rounded-full disabled:bg-gray-400 w-full py-2 px-3'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
