import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([])
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items, user])



    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-3xl my-5'>My Items: {items.length}</h1>
            {
                items.map(item => <MyItem key={item._id} item={item}></MyItem>)
            }
        </div>
    );
};

export default MyItems;