import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {

    const [user] = useAuthState(auth);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const email = user.email;
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const img = e.target.imgurl.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;

        const product = { email, name, price, quantity, img, supplier, description }

        fetch('http://localhost:5000/phone', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.target.reset();

    }
    return (
        <div className='p-2 md:p-10 text-black'>
            <div className='bg-rose-50 p-1 md:p-10 w-full md:w-2/3 mx-auto'>
                <h1 className='text-4xl font-semibold my-10'>Add a new product</h1>

                <form onSubmit={handleAddProduct} className='flex flex-col w-2/3 mx-auto '>

                    <input className='mt-2 p-2 bg-gray-300 text-black border-none outline-none rounded-md placeholder-slate-600' type="email" name="email" value={user?.email} autoComplete='off' required readOnly disabled />

                    <input className='mt-2 p-2 bg-gray-300 text-black border-none outline-none rounded-md placeholder-slate-600' type="text" name="name" placeholder='Product Name' autoComplete='off' required />

                    <input className='mt-2 p-2 bg-gray-300 text-black border-none outline-none rounded-md placeholder-slate-600' type="number" name="price" placeholder='Price' autoComplete='off' required />

                    <input className='mt-2 p-2 bg-gray-300 text-black border-none outline-none rounded-md placeholder-slate-600' type="number" name="quantity" placeholder='Quantity' autoComplete='off' required />

                    <input className='mt-2 p-2 bg-gray-300 text-black border-none outline-none rounded-md placeholder-slate-600' type="text" name="imgurl" placeholder='Image URL' autoComplete='off' required />

                    <input className='mt-2 p-2 bg-gray-300 text-black border-none outline-none rounded-md placeholder-slate-600' type="text" name="supplier" placeholder='Supplier Name' autoComplete='off' required />

                    <textarea className='rounded-lg mt-2 p-2 bg-gray-300 focus:outline-none placeholder-slate-600' name="description" id="" cols="20" rows="5" placeholder='Product description' autoComplete='off' required></textarea>

                    <input className='bg-rose-500 w-1/4 mx-auto rounded-md text-white mt-5 p-2 border-2 border-rose-900 font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110
                ' type="submit" value='Add' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;