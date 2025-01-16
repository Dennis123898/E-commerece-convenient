import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mainbody = () => {
    const navigate = useNavigate();

    const handleStartShopping = () => {
        navigate('/product-list');
    };
    
    
    return (
        <section className="flex flex-col items-center justify-center bg-white-500 p-10 w-full h-screen">
            <h1 className="text-3xl font-bold mt-4">Welcome to DV-E</h1>
            <p className="mt-2">Everything you need is here.</p>
            <button onClick={handleStartShopping} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Start Shopping</button>
        </section>
    );
};  

export default Mainbody;