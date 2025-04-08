import React from 'react';
import { Link } from 'react-router';

const Allpost = ({ Ap }) => {
    const { title, cover_image, description, published_at, id } = Ap;

    return (
        <div className='transition border-2   hover:scale-105 border-primary hover:border-secondary rounded p-3 bg-slate-100'>
            <h2></h2>
            <Link to={`/Blogs/${id}`}
                className="max-w-sm mx-auto  group hover:no-underline focus:no-underline dark:bg-gray-50 ">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 " src={cover_image} />
                <div className="p-6 space-y-2   ">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Allpost;