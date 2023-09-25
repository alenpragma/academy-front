import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div className='bg-white w-[100%] max-w-6xl  lg:mx-auto md:mx-5 mx-5'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;