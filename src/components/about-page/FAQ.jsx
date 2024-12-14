import React, { useState } from 'react';
import { answerArrow } from "../../assets/icons"

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col gap-3'>
        <div className="p-2 sm:p-3 md:p-4 lg:p-5 rounded-3xl flex justify-between items-center bg-[rgba(0,0,0,.1)]">
        <h3 className="text-xs lg:text-lg font-medium description">{question}</h3>
            <button
            className={`text-gray-600 focus:outline-none ${isOpen ? 'rotate-180' : ''}`}
            onClick={toggleFAQ}
            >
                <svg
                    className="w-3 lg:w-5 h-3 lg:h-5 transition-transform duration-300 transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
      {isOpen && <div className="flex items-start lg:items-center gap-3">
        <img
            className="w-[10px] h-[10px] lg:w-[24px] lg:h-[24px] mt-2 lg:mt-0"
            src={answerArrow}
            alt="answer-icon"
        />  
        <p className="text-sm lg:text-lg font-roboto">
            {answer}
        </p>
        </div>}
    </div>
  );
};

export default FAQ;
