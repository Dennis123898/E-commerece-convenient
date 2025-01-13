import React from 'react';

const Mainbody = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-white-500 
                           p-10 w-full h-screen">
            <h1 className="text-3xl font-bold mt-4">Mi Air Purifier</h1>
            <p className="mt-2">Everything you need is here.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Start Shopping</button>
        </section>
    );
};

export default Mainbody;