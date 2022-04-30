import React from 'react';
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
            <div className='flex justify-center'>
                <table>
                    <thead>
                        <tr>
                            <th className='px-10 border-b-2 h-14 border-red-500'>Products</th>
                            <th className='px-10 border-b-2 border-red-500'>Name</th>
                            <th className='px-10 border-b-2 border-red-500'>Price</th>
                            <th className='px-10 border-b-2 border-red-500'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                return (
                                    < tr key={product._id} >
                                        <td>
                                            <img className='w-28 p-5 border-b-2 border-red-500' src={product.img} alt="" />
                                        </td>
                                        <td className='px-10 border-2 border-red-500'>{product.name}</td>

                                        <td className='px-10 border-2 border-red-500'>{product.price}</td>

                                        <td className='px-10 border-2 border-red-500'>{product.quantity}</td>
                                        <td className='px-10 border-2 border-red-500'><button onClick={() => handleDeleteProduct(product._id)}>Delete</button></td>
                                    </tr>
                                )
                            })

                        }
                        {/* {
                            products.map(product => <InventoryItems key={product._id}
                                product={product}></InventoryItems>)
                        } */}
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default Inventories;