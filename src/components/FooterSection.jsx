import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

import ContactModal from './ContactModal';
import MessageModal from './MessageModal';

import { youtube, twitter, linkedIn } from "../assets/social";
import { footerSectionBg } from "../assets/images";
import { right } from "../assets/icons";
import {
  footerLeft1,
  footerLeft2,
  footerLeft3,
  footerLeft4,
  footerLeft5,
  footerLeft6,
  footerLeft7,
  footerRight1,
  footerRight2,
  footerRight3,
  footerRight4,
  footerRight5,
  footerRight6,
  footerRight7,
  footerRight8,
  footerRight9,
} from "../assets/people";

const FooterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {register, handleSubmit, reset, formState: {errors, isValid}, setError} = useForm({
    defaultValues: {
      platforms: [],
    },
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async ({email, platforms}) => {
    try {
      await fetch(`https://qwerki.com/api/v1/register`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({email, platforms: JSON.stringify(platforms)}),
      });
      setSubmitted(true);
      reset()
    } catch (e) {
      setError('email', {type: 'custom', message: 'unknown error encountered'});
    }
  };

  if (submitted) {
      return (
        <MessageModal message="Thank you for joining our waitlist. We'll send you a test link shortly." onClose={() => {setSubmitted(false);onClose()}} />
      );
  }

  return (
    <footer id="footer-section"  style={{backgroundImage: `url(${footerSectionBg})`}}>
      <div
        className="max-w-2xl mx-5 lg:mx-auto relative z-40 min-h-[650px] lg:min-h-[716px] text-white flex flex-col justify-evenly"
      >
        <div className="flex flex-col items-center gap-5">
          <h1 className="main-heading">Get early access</h1>
          <p className="text-base text-[#C3C3C3] text-center">
            Are you ready to take control of your productivity? Qwerki is
            coming soon to transform the way you capture ideas, manage tasks,
            and collaborate effortlessly.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="text-xs sm:text-sm md:text-base">
          <div
            className="relative input-wrapper"
          >
            <input
              className="input-field"
              type="email"
              name='email'
              id='email'
              placeholder="john.doe@gmail.com"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email address must be a valid address',
                },
              })}
            />
            <button
              type='submit'
              disabled={!isValid}
              className={`absolute top-1 right-2 border-[4px] border-transparent hover:border-black hover:text-black hover:bg-white hover:cursor-pointer px-2 py-1 md:px-4 md:py-2 rounded-full ${!isValid ? 'bg-gray-600' : 'bg-black'}`}
            >
              Submit
            </button>
          </div>
          {errors.email && <div className='text-sm text-pink-600 mx-2'>{errors.email.message}</div>}
          <div
            className="flex justify-center gap-4 simple-text mt-3 lg:mt-10 text-[10px] sm:text-xs md:text-sm lg:text-base"
          >
            {['iOS', 'macOS', 'Android', 'Web', 'Win'].map((p, i) => (
                <label className='flex items-center gap-1 md:gap-2 lg:gap-4' key={i}>
                  <input
                    className='appearance-none rounded-full w-3.5 h-3.5 lg:w-6 lg:h-6 p-1 border-[1.5px] border-white bg-black hover:cursor-pointer checked:bg-white checked:bg-clip-content focus:outline-none'
                    type='checkbox'
                    name='platforms'
                    value={p}
                    {...register('platforms')}
                  />
                  <span className='text-sm'>{p}</span>
                </label>
              ))}
          </div>
        </form>
        <div className="flex flex-col gap-5 text-xs text-[#6F6F70]">
          <p>
            By signing up for the Qwerki waitlist, you agree to receive email
            updates and communications about Qwerki's development, upcoming
            features and launch dates. We respect your p rivacy and will never
            share your information with third parties.
          </p>
          <p>
            You can unsubscribe from our communications at any time by
            clicking the "unsubscribe" link in our emails. Your participation
            in our waitlist does not guarantee access to the app or any
            specific timeline for release.
          </p>
        </div>
      </div>
      <section className="footer-links-wrapper">
        <div className="flex flex-col gap-2 w-full sm:gap-3 md:gap-4 lg:gap-6">
          <div className='flex items-center justify-between gap-3'>
            <p className="text-xs lg:text-base text-[#c3c3c3]">© 2023 Qwerki. All rights reserved.</p>
            <button onClick={openModal} className="flex items-center justify-center gap-3 bg-white py-1 lg:py-2.5 px-3 lg:px-5 text-black rounded-full">
              <p className="text-sm lg:text-base font-bold">Contact</p>
              <img
                className="h-[10px] w-[10px] mt-0.5 md:mt-1"
                src={right}
              />
            </button>
          </div>
          <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-3'>
            <div className="flex items-center gap-3 lg:gap-6">
              <a href='https://www.youtube.com/@Qwerki-app' target='_blank'>
                <img
                  className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"
                  src={youtube}
                  alt="youtube"
                />
              </a>
              <a href='https://twitter.com/qwerki' target='_blank'>
                <img
                  className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
                  src={twitter}
                  alt="x-twitter"
                />
              </a>
              <a href='https://www.linkedin.com/groups/14270487/?highlightedUpdateUrn=urn%3Ali%3AgroupPost%3A14270487-7074606015039639553&q=highlightedFeedForGroups' target='_blank'>
                <img
                  className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
                  src={linkedIn}
                  alt="linkedin-in"
                />
              </a>
            </div>
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-sm lg:text-base font-medium text-white">
              <Link className="underline" to="/privacy-policy">
                Privacy policy
              </Link>
              <Link className="underline" to="/terms-and-conditions">
                Terms of service
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
};

export default FooterSection;
