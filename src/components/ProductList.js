import React from "react";
import { useCart } from "../cart/CartContext";

const ProductList = () => {
    const { addToCart } = useCart();

    const products = [
        { 
            id: 1, 
            name: 'Kem', 
            price: '39.000 VND', 
            image: '/images/products_images/ice_cream.jpg', 
            rating: 5
        },
        { 
            id: 2, 
            name: 'Thùng bia tiger', 
            price: '150.000 VND', 
            image: '/images/products_images/Bia-Tiger-Thung.jpg', 
            rating: 2.1
        },
        { 
            id: 3, 
            name: 'Tương ớt Chinsu', 
            price: '20.000 VND', 
            image: '/images/products_images/tuong_ot.png', 
            rating: 4.5 
        },
        { 
            id: 3, 
            name: 'Nước tương Maggi', 
            price: '30.000 VND', 
            image: '/images/products_images/nuoc_tuong.png', 
            rating: 4.8
        },
        { 
            id: 4, 
            name: 'Sữa milo', 
            price: '8.000 VND', 
            image: '/images/products_images/milo_milk.jpg', 
            rating: 4.1
        },
        { 
            id: 4, 
            name: 'Sữa hộp lớn', 
            price: '60.000 VND', 
            image: '/images/products_images/big_bottle_milk.jpg', 
            rating: 4.2 
        },
        { 
            id: 4, 
            name: 'Sữa đặc Ông Thọ', 
            price: '31.000 VND', 
            image: '/images/products_images/ong_tho_milk.png', 
            rating: 4.3
        },
        { 
            id: 5, 
            name: 'Cơm nắm', 
            price: '20.000 VND', 
            image: '/images/products_images/com_nam.jpg', 
            rating: 4.8
        },
        { 
            id: 5, 
            name: 'Bánh bao nhân thịt', 
            price: '30.000 VND', 
            image: '/images/products_images/BB.jpg', 
            rating: 5
        },
        { 
            id: 6, 
            name: 'Dầu gội nguyên xuân', 
            price: '210.000 VND', 
            image: '/images/products_images/nguyen_xuan.png', 
            rating: 5 
        },
        { 
            id: 7, 
            name: 'Bim bim oishi', 
            price: '9.000 VND', 
            image: '/images/products_images/oishi_snack.jpeg', 
            rating: 4.3 
        },
        { 
            id: 8, 
            name: 'Kitkat', 
            price: '8.000 VND', 
            image: '/images/products_images/kitkat.png', 
            rating: 3.1 
        },
        { 
            id: 9, 
            name: 'Bột ngũ cốc Nestlé Milo', 
            price: '80.000 VND', 
            image: '/images/products_images/ngu_coc_milo.jpeg', 
            rating: 3.9 
        },
        { 
            id: 9, 
            name: 'Ngũ cốc Calbee', 
            price: '90.000 VND', 
            image: '/images/products_images/ngu_coc.png', 
            rating: 3 
        },
        { 
            id: 10, 
            name: 'Hộp bút chì', 
            price: '35.000 VND', 
            image: '/images/products_images/hop_but_chi.png', 
            rating: 2 
        },
        {
            id: 10, 
            name: 'Vở ghi chép', 
            price: '20.000 VND', 
            image: '/images/products_images/images_notebook.jpeg', 
            rating: 5 
        },
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="max-w-6xl mx-auto">
              
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                   
                    {products.map(product => (
                       
                        <div key={product.id} className="bg-white rounded-xl shadow-lg p-3">
                           
                            <div className="relative h-40 mb-2">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                            <h3 className="text-base font-bold text-center mb-1">{product.name}</h3>
                            <div className="flex justify-center space-x-0.5 mb-2">
                                {renderStars(product.rating)}
                            </div>
                            <button onClick= {() => addToCart(product)}
                                    className="w-full bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-2 text-sm">
                                Add To Cart
                            </button>
                            <p className="text-base font-bold text-center">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;