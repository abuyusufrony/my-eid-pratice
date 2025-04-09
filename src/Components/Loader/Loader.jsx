import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex flex-col  justify-center items-center  '>
            <ScaleLoader className='' color='#F92FD3'></ScaleLoader>
        </div>
    );
};

export default Loader;
