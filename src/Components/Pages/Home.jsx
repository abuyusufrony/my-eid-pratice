import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';


const Home = () => {
    return (
        <div>

            <h2 className=''>This is from home</h2>
            <Nav></Nav>
            <Outlet></Outlet>


        </div>
    );
};

export default Home;