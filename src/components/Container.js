import React from 'react';
// import Hours from './Hours';
// import Minutes from './Minutes';

export const Container = ({ hours, minutes, seconds }) => {
  return (
    <div className='mx-auto w-48 h-48 my-48 flex justify-center border'>
      {/* hours */}
      <div
        className='bg-orange-400 w-2'
        style={{
          transform: `rotate(${(hours / 12) * 360}deg) translateY(-50%)`,
        }}
      ></div>
      {/* minutes */}
      <div
        className='bg-blue-400 w-2'
        style={{
          transform: `rotate(${(minutes / 60) * 360}deg) translateY(-50%)`,
        }}
      ></div>
      {/* seconds */}
      <div
        className='bg-green-400 w-2'
        style={{
          transform: `rotate(${(seconds / 60) * 360}deg) translateY(-50%)`,
        }}
      ></div>
    </div>
  );
};
