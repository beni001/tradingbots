import React from 'react';
import Money from '../assets/Money.jpeg';

const Analytics = () => {

  const handleGetStarted = () => {
  const message = encodeURIComponent("Hello Nilote, I want to get started with trading bots.");
    window.open(`https://web.whatsapp.com/send?phone=+254729992516&text=${message}`, '_blank');
  };

  return (
    <div className='w-full bg-white py-16 px-4'>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 rounded-lg' src={Money} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '>Why You Need Our Trading Bots</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Trade Smarter, Faster and Easier</h1>
          <p>
          Are you tired of spending hours staring at charts, indicators, and signals, trying to make sense of the complex and volatile forex market? Do you wish you could trade smarter, faster, and easier, without sacrificing your profits or risking your capital? If you answered yes, then you need our trading bots.
          </p>
          <button className='bg-black text-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
