import React from 'react';
import { Link } from 'react-router-dom';
import useProduucts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProduucts();
    return (
        <div className='m-10'>
            <h1 className='text-5xl font-semibold mb-10'>Products</h1>
            <div className='grid grid-cols-3 gap-20 py-10'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <Link to='/inventories'>Manage Inventories</Link>

        </div>
    );
};

export default Products;