import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>


            <Banner></Banner>
            <h2>home page</h2>




        </div>
    );
};

export default Home;