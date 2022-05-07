import React from 'react';
import useProducts from '../../../hooks/useProducts';
import { TrashIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';

const AllInventories = ({ product }) => {
    const { _id, name, img, price, quantity } = product;

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
            <div className='md:flex justify-evenly items-center m-0 md:m-5 p-2 border-2 border-red-300 rounded-md'>
                <img className='w-24 md:w-48 mx-auto md:mx-0 m-5' src={img} alt="" />
                <p className='text-xl '>{name}</p>
                <p className='text-xl'> ${price}</p>
                <p className='text-xl'>Quantity: {quantity}</p>


                <div className='w-96 flex justify-around items-center'>
                    <button className='w-7 md:w-10 text-red-600 bg-rose-100' onClick={() => handleDeleteProduct(product._id)}> <TrashIcon></TrashIcon></button>

                    <button className='text-base md:text-xl bg-rose-500 px-2 py-1 rounded-md' onClick={() => navigateToPhoneUpdate(_id)}>Update</button>
                </div>

            </div>
        </div>
    );
};

export default AllInventories;