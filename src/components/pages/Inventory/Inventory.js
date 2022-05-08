import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inventory = () => {
    const { id } = useParams();
    const [phone, setPhone] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/phone/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPhone(data))
    }, [phone])

    const handleQuantityStock = (event) => {
        event.preventDefault();
        const restockInputValue = event.target.quantity.value;
        if (restockInputValue > 0) {
            const quantity = parseInt(restockInputValue) + parseInt(phone.quantity);
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
                .then(data => console.log("success"));
            toast('Restock Updated');
            event.target.reset();
        }
        else {
            toast('Please input a value to restock product')
        }


    }

    const handleDeliveredBtn = () => {

        const oldQuantity = phone.quantity;
        if (oldQuantity > 0) {
            const quantity = parseInt(oldQuantity) - 1;
            const valueAfterDelivered = { quantity };

            const url = `http://localhost:5000/phone/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(valueAfterDelivered)
            })
                .then(res => res.json())
                .then(data => console.log("success", data));
            toast('Product Delivered!!');
        }


    }
    return (
        <div>
            <div className='md:flex justify-between items-center w-full md:w-3/4 mx-auto mt-10 p-8 text-black bg-rose-50 rounded-md'>
                <img className='w-96 mx-auto' src={phone.img} alt="" />
                <div className='md:w-1/2'>
                    <h1 className='text-3xl font-bold my-4'>{phone.name}</h1>
                    <small>{phone.description}</small>
                    <p className='text-xl font-semibold my-2'>Price: ${phone.price}</p>
                    <p className='text-xl font-semibold'>Supplier: {phone.supplier}</p>
                    <p className='text-xl font-semibold my-2'>Quantity: {phone.quantity > 0 ? phone.quantity : 'Stock Out'}</p>
                    <button onClick={handleDeliveredBtn} className='bg-rose-500 px-2 md:px-8 py-2 rounded-md text-white'>Delivered</button>
                </div>
            </div>

            <div className='w-full md:w-2/3 my-10 mx-auto p-8 bg-rose-50 rounded-md text-black'>
                <h1 className='text-5xl font-bold mb-8'>Restock The items</h1>
                <form onSubmit={handleQuantityStock}>
                    <input className='px-6 py-3 rounded-md mb-3 border-none outline-none' type="number" name='quantity' placeholder='Place the quantity' />
                    <br />
                    <button className='bg-rose-500 px-2 md:px-8 py-2 rounded-md text-white'>Restock</button>
                </form>
                <br />
                <Link to='/inventory' className='bg-rose-500 px-2 md:px-8 py-2 md:py-4 rounded-md text-white'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventory;