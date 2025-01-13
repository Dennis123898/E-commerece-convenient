import React from 'react';

const Categories = () => {
    const categories = ["Frozen items", "Beers and alcohol", "Spices", 
                        "Milk", "Fast food", "Personal care items", 
                        "Snacks", "Sweets" , "Cereal","Notebook , pencil & stick note"];
    
    return (
        <div className="flex justify-around bg-black p-4 w-full hover">
            {categories.map((category, index) => (
                <div key={index} className="p-2 text-white transition duration-300 
                                            ease-in-out transform hover:bg-gray-700 
                                            hover:scale-105 rounded cursor-pointer">{category}</div>
            ))}
        </div>
    );
};

export default Categories;