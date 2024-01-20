import React from 'react';
import Typed from 'react-typed';
import Candlestick from '../assets/Candlestick.png';
import wallpaper2 from '../assets/wallpaper2.jpg';

const Hero = () => {
  const handlePurchase = () => {
    const phoneNumber = '+254729992516';
    const message = encodeURIComponent("Hello Nilote, I want to purchase trading bots.");

    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let url;
    if (screenWidth < 600) {
        url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${message}`;
    } else {
        url = `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${message}`;
    }
    window.open(url, '_blank');
  };

  return (
    <div className='text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${wallpaper2})` }}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='bg-transparent p-6 text-center'>
          <p className='text-white-500 font-bold'>
            The Top Trading bots in Kenya
          </p>
        </div>
        <div className='flex mt-6'>
          <div className='w-1/2 pt-6 backdrop-filter backdrop-brightness-50 rounded-lg max-w-md mx-auto'>
            
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
              BINARY SMASHER
            </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                by
              </p>
              <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['@NILOTE_GRAM', '@NILOTE_GRAM', '@NILOTE_GRAM']}
                typeSpeed={120}
                backSpeed={100}
                loop
              />
            </div>
            <p className='md:text-2xl text-xl font-bold text-blue-500'>Trade smarter, faster, and easier with the best trading bots in the market.</p>
            <button className='bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={handlePurchase}>Purchase</button>
          </div>
          <div className='w-1/2 pt-6 pr-2'>
            <img src={Candlestick} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
