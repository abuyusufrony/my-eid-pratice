import React, { useEffect, useState } from 'react';
import { DltLocal, store } from '../../utilites/Local';
import Allpost from '../AllPost/Allpost';

const Bookmarks = () => {
    const [blogs, setblog] = useState([])
    useEffect(() => {
        const getStore = store()
        setblog(getStore)
    }
        , [])

    const dltbokkmarkst = (id) => {
        DltLocal(id)
        const getStore = store()
        setblog(getStore)

    }
    return (
        <div className="grid justify-center px:4 sm:px8 lg:px-12 py-5 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {
                blogs.map(b => <Allpost dlt={true} dltbokkmarkst={dltbokkmarkst} Ap={b}></Allpost>)
            }
        </div>
    );
};

export default Bookmarks;