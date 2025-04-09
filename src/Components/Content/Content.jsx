import React from 'react';
import Markdown from 'react-markdown';
import { Link, useLoaderData } from 'react-router';
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const con = useLoaderData()
    const { title, cover_image, description, tags, published_at, id,
        body_html } = con
    return (
        <Link to={`/Blogs/${id}`}
            className="max-w mx-auto  group hover:no-underline focus:no-underline dark:bg-gray-50 ">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 " src={cover_image} />
            <div className="p-6 space-y-2   ">

                {/* <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span> */}
                <div>

                    <ul>
                        {
                            tags.map(t => <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{t}</a>)
                        }
                    </ul>
                    <h3 className="text-xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h3>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                </div>
            </div>
        </Link >
    );
};

export default Content;