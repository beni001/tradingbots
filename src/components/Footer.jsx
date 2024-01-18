import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      {/* Contact Information */}
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>.NG.</h1>
        <p className='py-4'>
          Unlock the power of automated trading with Binary Smasher. Elevate your trading experience and stay ahead of the market. Trade smarter, faster, and easier – the future of trading is here.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          {/* Facebook button */}
          <a href="https://www.instagram.com/nilote_gram" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={30} />
          </a>

          {/* Instagram button */}
          <a href="https://www.instagram.com/nilote_gram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>

          {/* Twitter button */}
          <a href="https://www.instagram.com/nilote_gram" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={30} />
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className='mt-6'>
        <h6 className='font-medium text-gray-400'>Contact</h6>
        <p className='text-sm'>
          Phone: <a href="tel:+254729992516">+254729992516</a>
        </p>
        <p className='text-sm'>
          Email: <a href="mailto:nilotekenya@gmail.com">nilotekenya@gmail.com</a>
        </p>
        <p className='text-sm'>Address: Nairobi Kenya</p>
      </div>

      {/* Copyright and Developer Information */}
      <div className='mt-8 text-gray-400 text-sm'>
        <p>&copy; 2024 Nilotegram. All rights reserved.</p>
        <p>Developed by webdraft labs</p>
      </div>
    </div>
  );
};

export default Footer;
