import React from 'react';

const Successpage = ({ score, time }) => {
  return (
    <div className='success-page'>
      <h1 className='heading'>React Tiles</h1>
      <div className='success-view'>
        <p className='result'>Your final score is: {score}</p>
        <p className='result'>Time taken: {time} seconds</p>
      </div>
    </div>
  );
};

export default Successpage;