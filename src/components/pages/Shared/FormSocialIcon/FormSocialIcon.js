import React from 'react';
import googleIcon from '../../../../images/social icon/google.png'

const FormSocialIcon = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-3'>
                <div className='bg-indigo-600 w-60 h-0.5'></div>
                <div className='mx-2 font-semibold'>Or</div>
                <div className='bg-indigo-600 w-60 h-0.5'></div>
            </div>
            <div>
                <button className='w-96 flex justify-center mt-5 mx-auto p-2 border-2 border-indigo-500 rounded font-semibold outline-none hover:font-bold hover:transition-all hover:scale-110'>Continue with google<img className='w-5 ml-2' src={googleIcon} alt="" /></button>
            </div>
        </div>
    );
};

export default FormSocialIcon;