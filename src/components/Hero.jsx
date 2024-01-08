import React from 'react';
import Typed from 'react-typed';
import Candlestick from '../assets/Candlestick.png'
import wallpaper2 from '../assets/wallpaper2.jpg'

const Hero = () => {
  return (
    <div className='text-white  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${wallpaper2})` }}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='flex'> 
          
          <div className='w-1/2 float-left pt-6  backdrop-filter backdrop-brightness-50 rounded-lg max-w-md mx-auto'> 
            <p className='text-blue-500 font-bold p-2'>
              The Top Trading bots in kenya
            </p>
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
            <button className='bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Purchase</button>
          </div>
          <div className='w-1/2 float-right pt-6 pr-2'> 
            <img src={Candlestick} alt="/"></img> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
