import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='min-h-screen notFound w-full'>
            <h1 className='.notFound-text text-4xl text-red-600 flex items-center justify-center'>404 error!! Page not found</h1>
        </div>
    );
};

export default NotFound;