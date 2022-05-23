import React from 'react';
// import Hours from './Hours';
// import Minutes from './Minutes';

export const Container2 = ({ hours, minutes, seconds }) => {
  return (
    <>
      {/* container */}
      <div
        className='mx-auto w-48 h-48 border relative rounded-2xl'
        style={{
          marginTop: '16rem',
          borderRadius: '2rem',
          boxShadow: '5px 5px 10px 0.1rem rgba(0,0,0,0.5)',
        }}
      >
        {/* center circle */}
        <div
          className='w-4 h-4 bg-yellow-400 absolute z-10 rounded-full'
          style={{
            left: '45%',
            top: '45%',
          }}
        />
        {/* hours */}
        <div
          className='bg-black w-2 absolute'
          style={{
            height: '4rem',
            left: '50%',
            top: '18%',
            transformOrigin: '50% 100%',
            transform: `rotate(${(hours / 12) * 360}deg)`,
            borderRadius: '2rem',
          }}
        ></div>
        {/* minutes */}
        <div
          className='bg-black w-1.5 absolute'
          style={{
            // display: 'none',
            height: '6rem',
            left: '50%',
            transformOrigin: '50% 100%',
            transform: `rotate(${(minutes / 60) * 360}deg)`,
            borderRadius: '2rem',
          }}
        ></div>
        {/* seconds */}
        <div
          className='bg-yellow-400 w-1 absolute'
          style={{
            // display: 'none',
            height: '6rem',
            left: '50%',
            transformOrigin: '50% 100%',
            transform: `rotate(${(seconds / 60) * 360}deg)`,
            borderRadius: '2rem',
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
