import React from 'react';

const TeamMembers = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-5xl font-semibold'>Our Team Members</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 m-0 md:m-20'>
                <div className='hover:scale-105 transition-all bg-rose-50 text-black p-8 rounded-md'>
                    <img className='w-64 mx-auto rounded-full' src="https://i.ibb.co/9pQYsBS/photo-1633332755192-727a05c4013d-ixlib-rb-1-2.jpg" alt="" />
                    <p className='text-xl font-semibold mt-3'>Name: Gray Vega</p>
                </div>
                <div className='hover:scale-105 transition-all bg-rose-50 text-black p-8 rounded-md'>
                    <img className='w-64 mx-auto rounded-full' src="https://i.ibb.co/zf1XZQg/photo-1535713875002-d1d0cf377fde-ixlib-rb-1-2.jpg" alt="" />
                    <p className='text-xl font-semibold mt-3'>Name: Ewing Mccarthy</p>
                </div>
                <div className='hover:scale-105 transition-all bg-rose-50 text-black p-8 rounded-md'>
                    <img className='w-64 mx-auto rounded-full' src="https://i.ibb.co/3Cg70yZ/photo-1570295999919-56ceb5ecca61-ixlib-rb-1-2.jpg" alt="" />
                    <p className='text-xl font-semibold mt-3'>Name: Sims Tran</p>
                </div>

            </div>
        </div>
    );
};

export default TeamMembers;