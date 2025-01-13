import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIcons = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex justify-between items-center p-4 bg-black-800 text-black">
            <div className="text-xl font-bold ml-14">DV-E</div>
            <div className="flex space-x-10 mx-10">  
                <button className="p-2 rounded-lg text-black font-bold">Home</button>
                <button className="p-2 rounded-lg text-black font-bold">Cart</button>
                <button className="p-2 rounded-lg text-black font-bold">Shopping</button>
            </div>
            <nav className="relative">
                <button onClick={toggleIcons} className="md:hidden">
                    <span className="text-white">☰</span>
                </button>
                {isOpen && (
                    <div className="absolute bg-gray-800 text-white p-4 rounded-md w-full ">
                        <span className="block">Cart</span>
                        <span className="block">User Account</span>
                    </div>
                )}
                <div className={`hidden md:flex md:space-x-3 ml-10`}>
                    <img src="images/cart_icon.png" 
                         alt="Cart icon" 
                         className="w-12 h-14 p-3 object-contain cursor-pointer" />
                    <img src="images/account.icon.jpg" 
                         alt="account icon" 
                         className="w-12 h-14 p-3 object-contain cursor-pointer" /> 
                </div>
            </nav>
        </header>
    );
};

export default Header;