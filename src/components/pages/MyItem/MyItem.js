import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const MyItem = ({ item }) => {
    const { _id, name, img, price, quantity } = item;

    const [products, setProducts] = useProducts();

    const navigate = useNavigate();

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
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }
    const navigateToPhoneUpdate = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <div className='flex justify-evenly items-center m-5 p-2 border-2 border-red-300 rounded-md'>
                <img className='w-32' src={img} alt="" />
                <span className='text-lg'> {name}</span>
                <span className='text-lg'> ${price}</span>
                <span className='text-lg'>Quantity: {quantity}</span>

                <div className='w-96 flex justify-around items-center'>
                    <button className='w-7 md:w-10 text-red-600 bg-rose-100' onClick={() => handleDeleteProduct(_id)}> <TrashIcon></TrashIcon></button>

                    <button className='text-base md:text-xl bg-rose-500 px-2 py-1 rounded-md' onClick={() => navigateToPhoneUpdate(_id)}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default MyItem;