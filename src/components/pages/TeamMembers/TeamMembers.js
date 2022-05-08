import React, { useEffect, useState } from 'react';
import TeamMember from '../TeamMember.js/TeamMember';

const TeamMembers = () => {
    const [members, setmembers] = useState([]);
    useEffect(() => {
        fetch('https://young-bastion-31479.herokuapp.com/members')
            .then(res => res.json())
            .then(data => setmembers(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl md:text-5xl font-semibold'>Our Team Members</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 m-0 md:m-20'>
                {
                    members.map(member => <TeamMember key={member._id} member={member}></TeamMember>)
                }
            </div>
        </div>
    );
};

export default TeamMembers;