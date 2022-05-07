import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, img, description, price, supplier, quantity } = product;

    const navigate = useNavigate();

    const navigateToPhoneUpdate = (id) => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='bg-rose-50 p-10 text-black relative rounded-md phone-card'>
            <img className='w-1/2 mx-auto' src={img} alt="" />
            <h1 className='text-xl font-bold mt-5'>{name}</h1>
            <small>{description}</small>
            <p className='text-base font-semibold'>Price: ${price}</p>
            <p className='text-base font-semibold'>Supplier: {supplier}</p>
            <p className='text-base font-semibold'>Quantity: {quantity}</p>
            <button onClick={() => navigateToPhoneUpdate(_id)} className='absolute bottom-0 left-0 bg-rose-500 p-3 w-full text-white text-xl font-semibold'>Update</button>
        </div>
    );
};

export default Product;