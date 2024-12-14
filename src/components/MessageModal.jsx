import React from 'react';
import { logo, contactModalBg } from "../assets/images"
import { right } from '../assets/icons';

const MessageModal = ({ message, onClose }) => {
  return (
    <div className="fixed z-40 inset-0 flex flex-col items-center justify-center bg-cover"  style={{backgroundImage: `url(${contactModalBg})`}}>
      <img src={logo} className="w-32 mb-12 bg-white p-2 rounded-lg" alt="logo" />
      <p className="card-heading max-w-sm mx-auto text-white text-center pb-14">
        {message}
      </p>
      <button
        onClick={onClose}
        className="flex items-center justify-center gap-3 bg-white py-3 px-5 text-black rounded-full"
      >
        <p className="font-bold">Back</p>
        <img className="h-[10px] w-[10px] mt-0.5 md:mt-1" src={right} alt="" />
      </button>
    </div>
  );
};

export default MessageModal;
