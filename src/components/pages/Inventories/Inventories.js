import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import AllInventories from '../AllInventories/AllInventories';


const Inventories = () => {
    const [products] = useProducts();

    return (
        <div>
            {
                products.map(product => <AllInventories key={product._id} product={product}></AllInventories>)
            }
            <div className='my-10'>
                <Link to='/addItem' className=' bg-rose-500 px-8 py-4  rounded-md text-white'>Add new Item</Link>
            </div>
        </div>
    );
};

export default Inventories;