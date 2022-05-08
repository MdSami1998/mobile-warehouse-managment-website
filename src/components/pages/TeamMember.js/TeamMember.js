import React from 'react';

const TeamMember = ({ member }) => {
    const { name, img } = member;
    return (
        <div className='hover:scale-105 transition-all bg-rose-50 text-black p-8 rounded-md'>
            <img className='w-64 mx-auto rounded-full' src={img} alt="" />
            <p className='text-xl font-semibold mt-3'>Name: {name}</p>
        </div>
    );
};

export default TeamMember;