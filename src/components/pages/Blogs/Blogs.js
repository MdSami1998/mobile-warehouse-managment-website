import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen'>
            <h1 className='text-4xl font-bold text-center py-5'>Question & Answer Section </h1>
            <div className=' w-full md:w-3/4 mx-auto pb-5'>
                <div className='bg-rose-50 text-black p-8 font-bold'>
                    <h1 className='text-2xl font-bold mb-5 text-indigo-800'> Difference between javascript and node js?</h1>

                    <p className='font-medium text-lg leading-8'>
                        JavaScript is a basic programming language that runs on the JavaScript Engine in any browser. While Node JS is an interpreter or runtime environment for the JavaScript programming language, it requires libraries that can be readily accessible from JavaScript programming to make it more useful.JavaScript running in any engine like Spider monkey in FireFox, V8 in Google Chrome.on the other hand,Node JS only supports the V8 engine, which is only supported by Google Chrome.
                    </p>
                </div>
                <div className=' bg-rose-50 text-black my-5 p-8 font-bold'>
                    <h2 className='text-2xl font-bold mb-5 text-indigo-800'> Differences between sql and nosql databases?</h2>

                    <p className='font-medium text-lg leading-8'>
                        SQL databases are relational, but NoSQL databases are not relational.SQL databases are scalable vertically, but NoSQL databases are scalable horizontally.SQL databases have a preset or fixed schema.NoSQL databases have dynamic schema.
                    </p>
                </div>
                <div className=' bg-rose-50 text-black p-8 font-bold'>
                    <h2 className='text-2xl font-bold mb-5 text-indigo-800'>What is the purpose of jwt and how does it work?</h2>

                    <p className='font-semibold text-lg leading-8'>
                        JWT, or JSON Web Token, is an open standard that allows two parties — a client and a server — to communicate security information. A series of claims is encoded in each JWT. JWTs are signed with a secret sharing technique to ensure that the claims cannot be changed after the token has been distributed.WT are mainly used for authentication.When a user logs in to an application, the app generates a JWT and sends it to the user. The JWT will be included in the user's subsequent requests. The token informs the server about the routes, services, and resources that the user has permission to utilize.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;