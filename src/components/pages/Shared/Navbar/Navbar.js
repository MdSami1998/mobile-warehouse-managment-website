import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='flex justify-evenly text-xl font-semibold p-6 sticky top-0 navbar text-rose-500'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            {user ? <button onClick={handleSignOut} className='font-semibold text-rose-500'>Sign Out</button> : <Link to='/login'>Log In</Link>}

        </div>
    );
};

export default Navbar;