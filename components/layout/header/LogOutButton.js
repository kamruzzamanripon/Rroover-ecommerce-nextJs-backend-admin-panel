import { LogoutIcon } from '@heroicons/react/outline';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutDataFetch } from '../../../redux/data_fetch/authenticationDataFetch';


const LogOutButton = () => {
  const dispatch = useDispatch()

  const logOut = ()=>{
    dispatch(logOutDataFetch())
  }
    return (
        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Log out</span>
              <LogoutIcon className='h-8' onClick={logOut} />
        </button>
    );
};

export default LogOutButton;