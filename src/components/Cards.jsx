import React from 'react';
import Binary1 from '../assets/Binary1.jpg'
import Binary2 from '../assets/Binary2.jpg'
import Mine from '../assets/Mine.jpg'

const Cards = () => {
  return (
    <div>
      
      <div className='w-full py-[10rem] p-4 bg-white'>
        <div>
        <h1 className="text-4xl font-bold flex  items-center justify-center mb-4 " >The BINARY_SMASHER BOTS</h1>
      </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='w-32 h-32 rounded-md overflow-hidden mx-auto'> <img className=' mx-auto w-full h-full' src={Binary1} alt="/" /></div>
                <h2 className='text-2xl font-bold text-center py-8'>Binary Smasher 1</h2>
                <p className='text-center text-4xl font-bold'>$100</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'> Arbitrage Strategy</p>
                    <p className='py-2 border-b mx-8'>Scalping feature</p>
                    <p className='py-2 border-b mx-8'>Back testing</p>
                </div>
                <button className='bg-blue-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Purchase</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <div className='w-32 h-32 rounded-md overflow-hidden mx-auto'> <img className=' mx-auto w-full h-full' src={Binary2} alt="/" /></div>
                <h2 className='text-2xl font-bold text-center py-8'>Binary Smasher 2</h2>
                <p className='text-center text-4xl font-bold'>$150</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Momentum trading</p>
                    <p className='py-2 border-b mx-8'>Reverse trading</p>
                    <p className='py-2 border-b mx-8'>Forward testing</p>
                </div>
                <button className='bg-blue-700 text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Purchase</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='w-32 h-32 rounded-md overflow-hidden mx-auto'> <img className='mx-auto  bg-white object-cover w-full h-full' src={Mine} alt="/" /></div> 
                <h2 className='text-2xl font-bold text-center py-8'>Nilote Mine</h2>
                <p className='text-center text-4xl font-bold'>$75</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Moving Average crossover</p>
                    <p className='py-2 border-b mx-8'>Stop loss</p>
                    <p className='py-2 border-b mx-8'>Easy to set up and use</p>
                </div>
                <button className='bg-blue-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Purchase</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
