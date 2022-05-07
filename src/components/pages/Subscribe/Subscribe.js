import React from 'react';

const Subscribe = () => {
    return (
        <div className='block md:flex items-center justify-evenly mx-0 md:mx-10 my-5 md:my-10 p-5 md:p-20 bg-rose-50'>
            <div>
                <h1 className='text-2xl md:text-4xl font-bold text-black'>Give your suggestion to add more products!!</h1>
                <h4 className='text-center text-3xl text-indigo-900 font-semibold my-10'>Subscribe Now!</h4>

                <input className='w-1/2 md:w-2/3 bg-slate-200 placeholder-black outline-none font-semibold px-5 py-3 rounded-l-xl' type="email" placeholder='Enter Your Email' required />

                <button type='submit' className='bg-rose-500 font-semibold px-5 py-3 rounded-r-xl '>Subscribe</button>
            </div>
            <div>
                {/* <img className='w-32 mx-auto pt-10 md:w-52' src={doctorLogo} alt="" /> */}
            </div>
        </div>
    );
};

export default Subscribe;