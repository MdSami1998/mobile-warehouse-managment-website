import React from 'react';
import './Banner.css'
import banner from '../../../images/banner-products.png'
import fackbookIcon from '../../../images/social icon/fackbook.png'
import instagramIcon from '../../../images/social icon/instagram.png'
import whatsappIcon from '../../../images/social icon/whatsapp.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative'>
            <img className='opacity-80' src={banner} alt="" />
            <div className='header'>
                <input className='bg-slate-300 px-5 text-sm md:text-lg placeholder-black' type="search" placeholder='Search...' />
                <button className='bg-rose-700'>Search</button>
            </div>
            <div className='absolute bottom-0 md:bottom-4 left-2/3 cursor-pointer flex justify-around w-1/4'>
                <a href='https://www.facebook.com/samial.zaber.7/'
                    target="_blank" rel="noopener noreferrer" ><img className='w-14 md:w-12' src={fackbookIcon} alt="" /></a>
                <a href=""><img className='w-14 md:w-12' src={instagramIcon} alt="" /></a>
                <a href=""><img className='w-14 md:w-12' src={whatsappIcon} alt="" /></a>
            </div>
        </div>
    );
};

export default Banner;