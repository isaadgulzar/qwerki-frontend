import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { contactModalBg, logo } from "../assets/images"
import { close, right } from "../assets/icons"

import MessageModal from './MessageModal';

const Modal = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({firstName, lastName, email, message}) => {
    try {
      await fetch(`https://qwerki.com/api/v1/contact`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({firstName, lastName, email, message}),
      });
      setSubmitted(true);
      reset();
    } catch (e) {
      setError('email', {type: 'custom', message: 'unknown error encountered'});
    }
  };

  if (!isOpen) {
    return null;
  }

  if (submitted) {
    return (
      <MessageModal message="Thank you for the message. We'll reach out to you shortly." onClose={() => {setSubmitted(false);onClose()}} />
    );
  }

  return (
    <div className="fixed z-40 inset-0 flex flex-col gap-10 items-center justify-center bg-cover" style={{backgroundImage: `url(${contactModalBg})`}}>
        <div className="relative z-50 flex flex-col items-center gap-5">
          <h1 className="main-heading text-white">Have a question?</h1>
          <p className="text-base text-[#C3C3C3] text-center max-w-xl mx-3 lg:mx-auto">
            We're here to help. If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us using the form below.
          </p>
        </div>
      <div className="relative z-50 p-4 lg:p-8 max-w-xl w-full mx-4">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center gap-5'>
                <div className="w-full mb-4">
                    <div className="input-wrapper">
                        <input
                            className="input-field"
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="John"
                            {...register('firstName', { required: 'First name is required' })}
                        />
                    </div>
                    {errors.firstName && (
                    <span className="text-red-500">{errors.firstName.message}</span>
                    )}
                </div>
            <div className="w-full mb-4">
                <div className="input-wrapper">
                    <input
                        className="input-field"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Doe"
                        {...register('lastName', { required: 'Last name is required' })}
                    />
                    </div>
                    {errors.lastName && (
                    <span className="text-red-500">{errors.lastName.message}</span>
                    )}
                </div>
            </div>
          <div className="mb-4">
            <div className="input-wrapper">
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="john.doe@gmail.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Email address must be a valid address',
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4">
            <div className="input-wrapper rounded-3xl">
              <textarea
                className="input-field"
                name="message"
                id="message"
                rows="4"
                placeholder="Hello there..."
                {...register('message', { required: 'Message is required' })}
              ></textarea>
            </div>
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>
          <button
           type="submit"
                className="flex items-center justify-center gap-3 bg-white/50 py-3 px-5 text-black rounded-full"
            >
                <p className="font-bold">Send message</p>
                <img
                    className="h-[10px] w-[10px] mt-0.5 md:mt-1"
                    src={right}
                    alt=""
                />
            </button>
        </form>
        <p className='text-xs text-[#6F6F70] mt-7'>
          By submitting this form, you agree to our
          <Link className="pl-1 inline underline" to="/privacy-policy">
            Privacy policy
          </Link>. We respect your privacy and we will not share your information.
        </p>
      </div>
      <button onClick={onClose} className='absolute top-5 right-5 text-white'>
            <img src={close} alt="" />
        </button>
    </div>
  );
};

export default Modal;
