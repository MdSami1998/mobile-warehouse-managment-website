import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
    }
    const handleLogoClick = () => {
        navigate('/home');
    };
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between items-center text-lg font-semibold p-1 md:p-1 sticky top-0 navbar'>
            <div className='flex justify-between'>
                <div onClick={() => setOpen(!open)} className='w-8 md:w-12'>
                    {open ? <XIcon className='md:hidden' /> : <MenuAlt1Icon className='md:hidden ' />}

                </div>
                <h1 onClick={handleLogoClick} className='text-rose-500 text-2xl md:text-4xl font-bold cursor-pointer'>Mobile<span className='text-rose-100'>Warehouse</span></h1>
            </div>
            <div className={`w-full left-0 md:w-4/5 flex md:justify-evenly flex-col md:flex-row text-xl p-2 md:p-7 absolute md:static ${open ? ' top-10 bg-rose-200 text-black leading-10' : '-top-60'}`}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/blogs'>Blogs</Link>
                {
                    user && <>
                        <Link to='/inventory'>Manage Items</Link>
                        <Link to='/myitems'>My Items</Link>
                        <Link to='/addItem'>Add Item</Link>
                    </>
                }
                {
                    user ? <button onClick={handleSignOut} className='font-semibold'>Sign Out</button> : <Link to='/login'>Log In</Link>
                }
            </div>


        </div>
    );
};

export default Navbar;