import React from 'react';
import banner from '../../../images/banner-products.png'
import fackbookIcon from '../../../images/social icon/fackbook.png'
import instagramIcon from '../../../images/social icon/instagram.png'
import whatsappIcon from '../../../images/social icon/whatsapp.png'

const Banner = () => {
    return (
        <div className='relative'>
            <img className='opacity-90' src={banner} alt="" />
            <div className='absolute bottom-4 left-2/3 cursor-pointer flex justify-around w-1/4'>
                <img className='w-20' src={fackbookIcon} alt="" />
                <img className='w-20' src={instagramIcon} alt="" />
                <img className='w-20' src={whatsappIcon} alt="" />
            </div>
        </div>
    );
};

export default Banner;