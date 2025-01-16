import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import React from "react";
  
const Header = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleIcons = () => {
        setIsOpen(!isOpen);
    };

    const handleHomeButton = () => {
        navigate('/')
    }

    const handleShoppingHeader = () => {
        navigate('/product-list')
    }
    
    const handleCart = () => {
        navigate('/cart')
    }

    return (
        <header className="flex justify-between items-center p-4 bg-black-800 text-black">
            <div className="text-xl font-bold ml-14">
                <button onClick={handleHomeButton}>DV-E</button></div>
            <div className="flex space-x-10 mx-10">  
                <button className="p-2 rounded-lg text-black font-bold"
                        onClick={handleHomeButton}>Home</button>
                <button className="p-2 rounded-lg text-black font-bold"
                        onClick={handleCart}>Cart</button>
                <button className="p-2 rounded-lg text-black font-bold"
                        onClick={handleShoppingHeader}>Shopping</button>
            </div>
            <nav className="relative">
                <button onClick={toggleIcons} className="md:hidden">
                    <span className="text-black">☰</span>
                </button>
                {isOpen && (
                    <div className="absolute bg-gray-800 text-white p-4 rounded-md w-full ">
                        <span className="block">Cart</span>
                        <span className="block">User Account</span>
                    </div>
                )}
                <div className={`hidden md:flex md:space-x-3 ml-10`}>
                  <button onClick={handleCart}>
                    <img src="images/cart_icon.png" 
                         alt="Cart icon" 
                         className="w-12 h-14 p-3 object-contain cursor-pointer" />
                  </button>
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>  
                </div>
            </nav>
        </header>
    );
};

export default Header;