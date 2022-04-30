import React from 'react';

const AddItem = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const img = e.target.imgurl.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;

        const product = { name, price, quantity, img, supplier, description }

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
        <div className='p-10 text-black'>
            <div className='bg-indigo-200 p-10'>
                <h1 className='text-4xl font-semibold my-10'>Add A New Product</h1>

                <form onSubmit={handleAddProduct} className='flex flex-col w-1/3 mx-auto '>

                    <input className='mt-2 p-2 text-black border-none outline-none rounded-md' type="text" name="name" placeholder='Name' autoComplete='off' required />

                    <input className='mt-2 p-2 text-black border-none outline-none rounded-md' type="number" name="price" placeholder='Price' autoComplete='off' required />

                    <input className='mt-2 p-2 text-black border-none outline-none rounded-md' type="number" name="quantity" placeholder='Quantity' autoComplete='off' required />

                    <input className='mt-2 p-2 text-black border-none outline-none rounded-md' type="text" name="imgurl" placeholder='Image URL' autoComplete='off' required />

                    <input className='mt-2 p-2 text-black border-none outline-none rounded-md' type="text" name="supplier" placeholder='Supplier Name' autoComplete='off' required />

                    <textarea className='rounded-lg mt-2 p-2 focus:outline-none' name="description" id="" cols="20" rows="5" placeholder='Item description' autoComplete='off' required></textarea>

                    <input className='bg-indigo-800 w-1/4 mx-auto rounded-md text-white mt-5 p-2 border-2 border-indigo-500 font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110
                ' type="submit" value='Add' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;