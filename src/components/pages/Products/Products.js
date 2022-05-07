import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div className='m-2 md:m-10 p-2 md:p-10'>
            <h1 className='text-3xl md:text-5xl font-semibold mb-2 md:mb-10 '>Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 md:py-10 '>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='my-5'>
                <Link className='bg-rose-500 px-8 py-4 rounded-md text-white' to='/inventory'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Products;