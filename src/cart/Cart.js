import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^\d]/g, ''));
            return total + (price * item.quantity);
        }, 0);
    };

    return ( 
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="border-b">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <button onClick={() => navigate('/')} className="text-xl font-bold">
                            DV-E
                        </button>
                    </div>
                    <button onClick={() => navigate(-1)} className="text-blue-600 hover:text-blue-800">
                        ← Continue Shopping
                    </button>
                </div>
            </div>

            {/* Cart Content */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Shopping Cart</h1>
                    <span className="text-xl">{cartItems.length} Items</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-5 gap-4 mb-4 text-gray-600 text-sm">
                            <div className="col-span-2">PRODUCT DETAILS</div>
                            <div className="text-center">QUANTITY</div>
                            <div className="text-center">PRICE</div>
                            <div className="text-center">TOTAL</div>
                        </div>

                        {cartItems.map(item => (
                            <div key={item.id} className="grid grid-cols-5 gap-4 items-center py-4 border-t">
                                <div className="col-span-2 flex gap-4">
                                    <img src={item.image} alt={item.name} className="w-24 h-24 object-contain"/>
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 text-sm mt-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex items-center border rounded w-32">
                                        <button 
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-3 py-1 hover:bg-gray-100"
                                        >
                                            −
                                        </button>
                                        <span className="px-3 py-1 min-w-[40px] text-center">
                                            {item.quantity}
                                        </span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-3 py-1 hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center">{item.price}</div>
                                <div className="text-center">
                                    {(parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity).toFixed(3)} VND
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>ITEMS {cartItems.length}</span>
                                    <span>{calculateTotal().toLocaleString('vi-VN')} VND</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="mb-4">
                                        <span className="font-medium">SHIPPING</span>
                                        <div className="mt-2">
                                            <select className="w-full p-2 border rounded">
                                                <option>Standard Delivery - 15.000 VND</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-medium">PROMO CODE</span>
                                        <div className="flex gap-2 mt-2">
                                            <input 
                                                type="text" 
                                                placeholder="Enter your code" 
                                                className="flex-grow p-2 border rounded"
                                            />
                                            <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500">
                                                APPLY
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between font-bold text-lg">
                                        <span>TOTAL COST</span>
                                        <span>{(calculateTotal() + 15000).toLocaleString('vi-VN')} VND</span>
                                    </div>
                                </div>
                                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
                                    CHECKOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;