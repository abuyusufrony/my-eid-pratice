import React from 'react';

import { useLoaderData } from 'react-router';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Content from '../Content/Content';
import Author from '../Author/Author';

const BlogDetails = () => {
    const single = useLoaderData()
    const { title, comments_count, reading_time_minutes, tag_list, public_reactions_count, published_at } = single

    return (
        <div>
            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                            <div className="flex items-center md:space-x-2">
                                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                                <p className="text-sm">{public_reactions_count} Reactions •  Post Date {new Date(published_at).toLocaleDateString()} </p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{reading_time_minutes} min read • {comments_count} Comments</p>
                        </div>
                    </div>

                    <Tabs>
                        <TabList>
                            <Tab>Content</Tab>
                            <Tab>Author</Tab>

                        </TabList>

                        <TabPanel>
                            <Content></Content>
                        </TabPanel>
                        <TabPanel>
                            <Author></Author>
                        </TabPanel>
                    </Tabs>

                </article>

            </div>

        </div>
    );
};

export default BlogDetails;