import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [phone, setPhone] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/phone/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPhone(data))
    }, [id])

    const handleQuantityStock = (event) => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const updatedValue = { quantity };

        const url = `http://localhost:5000/phone/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedValue)
        })
            .then(res => res.json())
            .then(data => console.log("success", data));
        event.target.reset();

    }
    return (
        <div>
            <div className='w-1/3 mx-auto mt-10 p-8 text-black bg-slate-400 rounded-md'>
                <img className='w-96 mx-auto' src={phone.img} alt="" />
                <h1 className='text-3xl font-bold my-4'>{phone.name}</h1>
                <small>{phone.description}</small>
                <p className='text-2xl font-semibold my-2'>Price: ${phone.price}</p>
                <p className='text-2xl font-semibold'>Supplier: {phone.supplier}</p>
                <p className='text-2xl font-semibold my-2'>Quantity: {phone.quantity}</p>
                <button className='bg-slate-600 px-8 py-2 rounded-md text-white'>Delivered</button>
            </div>
            <div className='w-2/3 my-10 mx-auto p-8 bg-slate-400 rounded-md text-black'>
                <h1 className='text-5xl font-bold mb-8'>Restock The items</h1>
                <form onSubmit={handleQuantityStock}>
                    <input className='px-6 py-3 rounded-md mb-3 border-none outline-none' type="number" name='quantity' placeholder='Place the quantity' />
                    <br />
                    <button className='bg-slate-600 px-8 py-2 rounded-md text-white'>Restock</button>
                </form>
            </div>
        </div>
    );
};

export default Inventory;