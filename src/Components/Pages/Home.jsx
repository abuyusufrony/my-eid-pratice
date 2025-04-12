import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>

            <h2 className=''>This is from home</h2>
            <h2>This is homwe</h2>
            <Banner></Banner>




        </div>
    );
};

export default Home;