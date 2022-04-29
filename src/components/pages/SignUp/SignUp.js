import React from 'react';
import { Link } from 'react-router-dom';
import FormSocialIcon from '../Shared/FormSocialIcon/FormSocialIcon';

const SignUp = () => {
    return (
        <div className='login-form p-10 text-black'>
            <div className='bg-indigo-200 p-10'>
                <h2 className='text-4xl font-bold my-5'>Please Sign Up!</h2>
                <form className='flex flex-col w-1/3 mx-auto'>
                    <input className='my-5 p-2 text-xl text-black border-none outline-none rounded-md' type="email" name="" id="" placeholder='Email' required />

                    <input className='mb-5 p-2 text-xl text-black border-none outline-none rounded-md' type="password" name="" id="" placeholder='Password' required />

                    <input className='mb-5 p-2 text-xl text-black border-none outline-none rounded-md' type="password" name="" id="" placeholder='Confirm Password' required />

                    <input className='bg-indigo-800 w-1/4 mx-auto  rounded-md text-white mt-5 p-2 border-2 border-indigo-500 font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110
                ' type="submit" name="" value='Sign Up' />
                </form>
                <div className='mt-4 '>
                    <span className='text-center font-semibold'>Already have an acount? <Link to="/login" className='text-xl text-blue-700 font-semibold hover:font-bold hover:transition-all'>Log In.</Link></span>
                </div>
                <FormSocialIcon></FormSocialIcon>
            </div>
        </div>
    );
};

export default SignUp;