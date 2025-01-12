import React from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
          <Header></Header>
          <Outlet></Outlet>
        </div>
    );
};

export default Main;