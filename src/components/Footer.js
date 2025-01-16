import React from 'react';
import { useFooterVisibility } from '../hooks/useFooterVisibility';

const Footer = () => {
    const showFooter = useFooterVisibility();

    if (!showFooter) return null;

    return (
        <footer className="bg-gray-800 text-white p-6 text-center">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0 md:w-1/3">
                    <h2 className="text-lg font-bold">About us</h2>
                    <p>Welcome to our website-where we bring convenient and speed to your busy life. 
                       With a wide range of quality products, reasonable prices and good service,
                       we guarantee to satisfy your daily needs. Save time, enjoy life!
                    </p>
                </div>
                <div className="mb-4 md:mb-0 md:w-1/3">
                    <h2 className="text-lg font-bold">Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Shopping</li>
                    </ul>
                </div>
                <div className="md:w-1/3">
                    <h2 className="text-lg font-bold">News and media</h2>
                    <p>Discover the latest news and highlights from our convenience store! 
                       Get updates on exciting promotions, new products, shopping tips, and exclusive events. 
                       Follow us for a better shopping experience and to stay ahead of the trends!</p>
                </div>
            </div>
            <p className="mt-4">© 2025 DV-E. All rights reserved.</p>
        </footer>
    );
};

export default Footer;