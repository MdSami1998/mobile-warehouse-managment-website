import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div className='m-10 p-10'>
            <h1 className='text-5xl font-semibold mb-10 '>Products</h1>
            <div className='grid grid-cols-3 gap-20 py-10'>
                {
                    products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <Link to='/inventory' className='bg-rose-500 px-8 py-4 rounded-md text-white'>Manage Inventories</Link>
        </div>
    );
};

export default Products;