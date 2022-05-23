import React from 'react';
// import Hours from './Hours';
// import Minutes from './Minutes';

export const Container = ({ hours, minutes, seconds }) => {
  return (
    <>
      <div
        className='mx-auto w-48 h-48 border relative rounded-2xl'
        style={{
          marginTop: '16rem',
          borderRadius: '2rem',
          boxShadow: '10px 10px 20px 0.5rem rgba(0,0,0,0.5)',
        }}
      >
        {/* hours */}
        <div
          className='bg-orange-400 w-2 absolute'
          style={{
            height: '6rem',
            left: '50%',
            transformOrigin: 'bottom left',
            transform: `rotate(${(hours / 12) * 360}deg)`,
          }}
        ></div>
        {/* minutes */}
        <div
          className='bg-blue-400 w-2 absolute'
          style={{
            // display: 'none',
            height: '6rem',
            left: '50%',
            transformOrigin: 'bottom left',
            transform: `rotate(${(minutes / 60) * 360}deg)`,
          }}
        ></div>
        {/* seconds */}
        <div
          className='bg-green-400 w-2 absolute'
          style={{
            // display: 'none',
            height: '6rem',
            left: '50%',
            transformOrigin: 'bottom left',
            transform: `rotate(${(seconds / 60) * 360}deg)`,
          }}
        ></div>
      </div>
      <div
        className='mx-auto'
        style={{ margin: '1rem auto', width: '50%', textAlign: 'center' }}
      >
        {hours}:{minutes}:{seconds}
      </div>
    </>
  );
};
