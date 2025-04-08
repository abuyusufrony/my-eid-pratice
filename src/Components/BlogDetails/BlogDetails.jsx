import React from 'react';
import { useLoaderData } from 'react-router';

const BlogDetails = () => {
    const single = useLoaderData()
    const { title } = single

    return (
        <div>

            <h2>{title}</h2>
        </div>
    );
};

export default BlogDetails;