import React from 'react';
import { useLoaderData } from 'react-router';

const Author = () => {
    const auth = useLoaderData()
    const { title, blog } = auth

    return (
        <div>
            <h2>Ami author na {auth.user.name} </h2>
        </div>
    );
};

export default Author;