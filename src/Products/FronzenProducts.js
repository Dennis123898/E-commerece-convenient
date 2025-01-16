
const FrozenProducts = () => {

    const fronzen_products_lists = [
        {
            id: 1, 
            name: 'Kem', 
            price: '39.000 VND', 
            image: '/images/products_images/ice_cream.jpg', 
            rating: 5
        }
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
                   
                    {fronzen_products_lists.map(frozen_products_list => (
                       
                        <div key={frozen_products_list.id} className="bg-white rounded-xl shadow-lg p-3">
                           
                            <div className="relative h-40 mb-2">
                                <img 
                                    src={frozen_products_list.image} 
                                    alt={frozen_products_list.name} 
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                            <h3 className="text-base font-bold text-center mb-1">{frozen_products_list.name}</h3>
                            <div className="flex justify-center space-x-0.5 mb-2">
                                {renderStars(frozen_products_list.rating)}
                            </div>
                            <button className="w-full bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-2 text-sm">
                                Add To Cart
                            </button>
                            <p className="text-base font-bold text-center">{frozen_products_list.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default FrozenProducts;