import React from 'react';
import googleIcon from '../../../../images/social icon/google.png'
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import axios from 'axios';

const FormSocialIcon = () => {
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth)


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
    

    if (user) {
        const jwtSocial = async () => {
            const email = user.email;
            console.log(email);
            const { data } = await axios.post('https://young-bastion-31479.herokuapp.com/login', {
                email
            });
            localStorage.setItem('accessToken', data.accessToken);
            navigate(from, { replace: true });
        }
        jwtSocial();
    }

    return (
        <div>
            <div className='flex justify-center items-center mt-3'>
                <div className='bg-indigo-600 w-60 h-0.5'></div>
                <div className='mx-2 font-semibold'>Or</div>
                <div className='bg-indigo-600 w-60 h-0.5'></div>
            </div>
            <div>
                {errorMessage}
                <button onClick={() => signInWithGoogle()} className='w-full md:w-96 flex justify-center mt-5 mx-auto p-2 border-2 border-indigo-500 rounded font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110'>Continue with google<img className='w-5 ml-2' src={googleIcon} alt="" /></button>
            </div>
        </div>
    );
};

export default FormSocialIcon;