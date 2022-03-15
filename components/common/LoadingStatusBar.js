import React from 'react';
import { Watch } from 'react-loader-spinner';

const LoadingStatusBar = () => {
    return (
        <span className='absolute top-0 left-0 bg-gray-500/50 w-screen h-screen'>
                <span className='absolute left-1/2 top-1/4'>
                  <Watch 
                  height="100"
                  width="100"
                  color='white'
                  ariaLabel='loading'
                  />
                </span>
        </span>
    );
};

export default LoadingStatusBar;