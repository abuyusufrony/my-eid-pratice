import React from 'react';
import wave from '../../assets/wave.svg'
import { Link, useNavigation } from 'react-router';
import Loader from '../Loader/Loader';
import ai from '../../assets/ai image.jpg'

const Banner = () => {

    const nav = useNavigation()
    if (nav.state === 'loading') return <Loader></Loader>
    return (
        <div>
            {/* <div className="banner-conatiner ">
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Wellcome <span
                                class=" font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"
                            >
                                Rony
                            </span></h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <Link to='/blogs'> <button className="btn btn-primary">Blogs</button></Link>
                            <Link to='/bookmarks'> <button className="btn btn-primary">Bookmarks</button></Link>
                        </div>
                    </div>

                </div>
                <div>
                    <img className=' ' src={wave} alt="" />
                </div>

            </div> */}

            <section className="dark:bg-gray-100 dark:text-gray-800 bg-[#7C4EE4]">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left text-white">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white">How AI will
                            <span className="dark:text-violet-600"></span> <br />change The Future
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/blogs'> <button className="btn btn-primary bg-white text-primary">Blogs</button></Link>
                            <Link to='/bookmarks'> <button className="btn btn-primary bg-white text-primary">Bookmarks</button></Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={ai} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl " />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;