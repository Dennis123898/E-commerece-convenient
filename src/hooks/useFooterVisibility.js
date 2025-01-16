import { useLocation } from 'react-router-dom';

export const useFooterVisibility = () => {
  const location = useLocation();
  
  const productPages = [
    '/product-list',
    '/fronzen-products',
    '/alcohol',
    '/spices',
    '/milk',
    '/fast-food',
    '/personal-items',
    '/snacks',
    '/sweets',
    '/cereal',
    '/school-supplies',
    '/cart'
  ];

  return !productPages.includes(location.pathname);
};