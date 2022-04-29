import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Inventories = () => {
    const [products] = useProducts();
    return (
        <div className='m-10 p-10'>
            <div className='grid grid-cols-3 gap-20 py-10'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Inventories;