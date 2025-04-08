import React from 'react';
import wave from '../../assets/wave.svg'

const Banner = () => {
    return (
        <div>
            <div className="banner-conatiner ">
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
                            <button className="btn btn-primary">Blogs</button>
                        </div>
                    </div>

                </div>
                <div>
                    <img className=' ' src={wave} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;