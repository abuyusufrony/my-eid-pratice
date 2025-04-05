import React from 'react';
import Home from '../Pages/Home';
import Navbar from 'daisyui/components/navbar';
import Nav from '../Pages/Nav';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import wave from '../../assets/wave.svg'

const Hook = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>

            <Footer></Footer>


        </div>
    );
};

export default Hook;