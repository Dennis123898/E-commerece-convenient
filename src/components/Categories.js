import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const categories = [
        { id: 1, name: "Đồ đông lạnh" },
        { id: 2, name: "Bia và rượu" },
        { id: 3, name: "Gia vị" },
        { id: 4, name: "Sữa" },
        { id: 5, name: "Đồ ăn nhanh" },
        { id: 6, name: "Đồ dùng vệ sinh cá nhân" },
        { id: 7, name: "Snacks" },
        { id: 8, name: "Kẹo" },
        { id: 9, name: "Ngũ cốc" },
        { id: 10, name: "Đồ dùng học tập" }
    ];

    const navigate = useNavigate()

    const handleFrozenProducts = () => {
        navigate('/fronzen-products')
    }


    return (
        <div className="flex justify-around bg-black p-4 w-full hover">
            {categories.map((category) => (
                <button 
                    key={category.id}
                    onClick={handleFrozenProducts}
                    className="p-2 text-white transition duration-300 
                               ease-in-out transform hover:bg-gray-700 
                               hover:scale-105 rounded cursor-pointer">
                    {category.name}
                    
                </button>
            ))}
        </div>
    );
};

export default Categories;