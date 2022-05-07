import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormSocialIcon from '../Shared/FormSocialIcon/FormSocialIcon';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../Shared/Loader/Loader';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let signupErrorMessage;
    if (error) {
        signupErrorMessage =
            <div>
                <p className='text-red-500'>Error: {error.message}</p>
            </div>
    }

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            return setErrorMessage("** Password does't match **")
        }
        createUserWithEmailAndPassword(email, password, confirmPassword)
    }
    return (
        <div className='login-form p-2 md:p-10 text-black'>
            <div className='bg-rose-50 p-2 md:p-10 w-full md:w-2/3 mx-auto'>
                <h2 className='text-4xl font-bold my-5'>Please Sign Up!</h2>
                <form onSubmit={handleSignUp} className='flex flex-col w-full md:w-2/3 mx-auto'>
                    <input className='my-5 p-2 font-semibold text-black border-none outline-none rounded-md bg-gray-300 placeholder-slate-600' type="email" name="email" id="" placeholder='Enter email' required />

                    <input className='mb-5 p-2 font-semibold text-black border-none outline-none rounded-md bg-gray-300 placeholder-slate-600' type="password" name="password" id="" placeholder='Password' required />

                    <input className='mb-5 p-2 font-semibold text-black border-none outline-none rounded-md bg-gray-300 placeholder-slate-600' type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />

                    {signupErrorMessage}
                    <p className='text-red-600 font-bold'>{errorMessage}</p>

                    <input className='bg-rose-500 w-1/4 mx-auto  rounded-md text-white mt-5 p-2 border-2 border-rose-900 font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110
                ' type="submit" value='Sign Up' />
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