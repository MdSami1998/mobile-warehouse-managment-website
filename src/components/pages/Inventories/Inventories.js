import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';


const Inventories = () => {
    const [products, setProducts] = useProducts();

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
                            products.map(product => {
                                return (
                                    < tr key={product._id} >
                                        <td>
                                            <img className='w-16 mx-auto my-2 border' src={product.img} alt="" />
                                        </td>
                                        <td className='px-10 border-b'>{product.name}</td>

                                        <td className='px-10 border-b'>{product.price}</td>

                                        <td className='px-10 border-b'>{product.quantity}</td>

                                        <td className='px-3 border-b bg-red-600'><button onClick={() => handleDeleteProduct(product._id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
            <Link to='/addItem' className=' bg-slate-600 px-8 py-4 rounded-md text-white'>Add new Item</Link>
        </div >
    );
};

export default Inventories;