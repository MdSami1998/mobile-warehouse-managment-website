import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormSocialIcon from '../Shared/FormSocialIcon/FormSocialIcon';
import './LogIn.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loader from '../Shared/Loader/Loader';
import axios from 'axios';

const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef();
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorMessage;
    if (error) {
        errorMessage =
            <div>
                <p className='text-red-500 font-bold'>Error: {error.message}</p>
            </div>
    }

    if (loading || sending) {
        return <Loader></Loader>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    // handle Log In function 
    const handleLogIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);

        const { data } = await axios.post('http://localhost:5000/login', { email });
        console.log(data)
        localStorage.setItem('accessToken', data);
        // navigate(from, { replace: true });
    }

    // password reset function 

    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent! Set new password")
        }
        else {
            toast("Please enter your email")
        }
    }

    return (
        <div className='p-1 md:p-10 text-black'>
            <div className='bg-rose-50 p-2 md:p-10 w-full md:w-2/3 mx-auto'>
                <h2 className='text-4xl font-bold my-5'>Please Log In!</h2>
                <form onSubmit={handleLogIn} className='flex flex-col w-full md:w-2/4 mx-auto'>
                    <input ref={emailRef} className='my-5 p-2 font-semibold text-black border-none outline-none rounded-md bg-gray-300 placeholder-slate-600' type="email" name="email" placeholder='Your email' required />

                    <input className='mb-5 p-2 font-semibold text-black border-none outline-none rounded-md bg-gray-300 placeholder-slate-600' type="password" name="password" placeholder='Your password' required />

                    <input className='bg-rose-500 w-1/4 mx-auto  rounded-md text-white mt-5 p-2 border-2 border-rose-900 font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110
                ' type="submit" value='Log In' />
                </form>
                {errorMessage}
                <div className='mt-4 '>
                    <span className='text-center font-semibold'>New Here? <Link to="/signup" className='text-xl text-blue-600 font-semibold hover:font-bold hover:transition-all'>Create a account.</Link></span>
                    <br />
                    <button onClick={handlePasswordReset} className='text-blue-700 mt-2 font-semibold hover:font-bold'>Forget Password?</button>
                </div>
                <FormSocialIcon></FormSocialIcon>
            </div>
        </div>
    );
};

export default LogIn;