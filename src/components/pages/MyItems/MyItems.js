import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([])
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items])


    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/phone/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = items.filter(product => product._id !== id);
                        setItems(remaining);
                    }
                })
        }
    }

    return (
        <div className='m-10 p-10'>
            <div className='flex justify-center mb-10'>
                <table>
                    <thead>
                        <tr>
                            <th className='px-10 h-14'>Products</th>
                            <th className='px-10'>Name</th>
                            <th className='px-10'>Price</th>
                            <th className='px-10'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => {
                                return (
                                    < tr key={item._id} >
                                        <td>
                                            <img className='w-16 mx-auto my-2 border' src={item.img} alt="" />
                                        </td>
                                        <td className='px-10 border-b'>{item.name}</td>

                                        <td className='px-10 border-b'>${item.price}</td>

                                        <td className='px-10 border-b'>{item.quantity}</td>
                                        <td className='px-3 border-b bg-red-600'><button onClick={() => handleDeleteProduct(item._id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default MyItems;