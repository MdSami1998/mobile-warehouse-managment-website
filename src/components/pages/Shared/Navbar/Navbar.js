import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex justify-evenly text-xl font-semibold p-6 sticky top-0 navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/inventories'>Inventories</Link>
        </div>
    );
};

export default Navbar;