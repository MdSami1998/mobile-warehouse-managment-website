import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-evenly text-xl font-semibold p-6'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/inventories'>Inventories</Link>
        </div>
    );
};

export default Navbar;