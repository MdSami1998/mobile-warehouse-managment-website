import React from 'react';

const Product = ({ product }) => {
    const { name, img, description, price, supplier, quantity } = product;
    return (
        <div className='bg-slate-200 p-10 text-black relative'>
            <img className='w-1/2 mx-auto' src={img} alt="" />
            <h1 className='text-3xl font-bold'>{name}</h1>
            <small>{description}</small>
            <p className='text-2xl font-semibold'>Price: ${price}</p>
            <p className='text-2xl font-semibold'>Supplier:{supplier}</p>
            <p className='text-2xl font-semibold'>Quantity:{quantity}</p>
            <button className='absolute bottom-0 left-0 bg-slate-600 p-3 w-full'>manage</button>
        </div>
    );
};

export default Product;