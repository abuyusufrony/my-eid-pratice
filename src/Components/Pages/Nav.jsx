import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const themeChnage = (e) => {

        if (e.target.checked) {
            console.log(e.target.checked)
            setTheme('dark')


        }
        else {
            setTheme('light')


        }

        // console.log(theme)

    }

    return (
        <div className=''>
            <h2 className=''>This is nav</h2>
            <div className="navbar bg-base-100 shadow-sm  ">
                <div className="flex-1  ">
                    <a className="btn btn-ghost text-2xl font-bold gap-0"> <span className='text-secondary'>Rony</span> <span className='text-primary'>Dev</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-bold  ">
                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary' : 'font-bold'}>Home</NavLink></li>
                        <li><NavLink to='/Blogs' className={({ isActive }) => isActive ? "text-primary bg-amber-200" : "font-bold"}>Blogs</NavLink></li>
                        <li><NavLink to='/Bookmarks' > Bookmarks</NavLink></li>

                    </ul>

                </div>
                <label className="toggle text-base-content">
                    <input onChange={themeChnage} type="checkbox" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
            </div>

        </div>
    );
};

export default Nav;