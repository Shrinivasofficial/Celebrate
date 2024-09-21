import React from 'react';
import gift1 from '../Assets/gift1.png';

export const Featured = () => {
  return (
    <div className='mt-8 px-4 md:px-16 flex flex-col justify-center space-y-6'>
      <h1 className='text-3xl md:text-4xl font-DMSerif '>Featuring</h1>
      <p className='font-DMSans  text-lg md:text-xl'>Collections</p>

      {/* Responsive grid for items */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <div className='relative p-6 drop-shadow-lg space-y-3 rounded-lg bg-white'>
          <img src={gift1} alt='Gift Box' className='w-full h-auto' />
          <div className='px-3'>
            <h1 className='text-xl md:text-2xl font-DMSerif'>Surprise Effect</h1>
            <p className='text-gray-500 font-DMSans text-sm md:text-base'>
              This box contains surprise elements that even surprise the surpriser.
            </p>
            <button className='mt-4 w-full py-3 text-center text-lg rounded-lg bg-[#fbf7f2] hover:bg-gray-200'>
              Order Now
            </button>
          </div>
        </div>

        <div className='relative p-6 drop-shadow-lg space-y-3 rounded-lg bg-white'>
          <img src={gift1} alt='Gift Box' className='w-full h-auto' />
          <div className='px-3'>
            <h1 className='text-xl md:text-2xl font-DMSerif'>Surprise Effect</h1>
            <p className='text-gray-500 font-DMSans text-sm md:text-base'>
              This box contains surprise elements that even surprise the surpriser.
            </p>
            <button className='mt-4 w-full py-3 text-center text-lg rounded-lg bg-[#fbf7f2] hover:bg-gray-200'>
              Order Now
            </button>
          </div>
        </div>

        <div className='relative p-6 drop-shadow-lg space-y-3 rounded-lg bg-white'>
          <img src={gift1} alt='Gift Box' className='w-full h-auto' />
          <div className='px-3'>
            <h1 className='text-xl md:text-2xl font-DMSerif'>Surprise Effect</h1>
            <p className='text-gray-500 font-DMSans text-sm md:text-base'>
              This box contains surprise elements that even surprise the surpriser.
            </p>
            <button className='mt-4 w-full py-3 text-center text-lg rounded-lg bg-[#fbf7f2] hover:bg-gray-200'>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
