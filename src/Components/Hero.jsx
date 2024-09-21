import React from 'react';
import bgimg from '../Assets/giftbg.png';

export const Hero = () => {
  return (
    <div className='mt-16 flex justify-center items-center text-center px-4'>
      <div className='space-y-5 max-w-xl'>
       
        <h1 className='text-5xl sm:text-7xl md:text-9xl font-DMSerif font-regular text-gray-900'>
          Celebrate
        </h1>
        
        <h3 className='text-xl sm:text-2xl md:text-3xl font-DMSerif font-light text-gray-800'>
          The Season With Us!
        </h3>
        
        <p className='text-gray-700 capitalize font-DMSans text-lg sm:text-9l md:text-9l'>
          Why Wait Until Your Loved Ones Special Occasions? Surprise Them With Special And Heart-Touching Gifts Now!
        </p>

        <img src={bgimg} alt='' className='w-full h-auto' />
      </div>
    </div>
  );
}
