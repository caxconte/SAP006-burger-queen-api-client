import { getProducts } from '../../services/data';
import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState('all-day')

  getProducts()
    .then(data => setProducts(data, products));
  
  const handleButtonTypeClick = (e) => setProductsType(e.target.value);

  const filteredProducts = products.filter(item => item.type.includes(productsType));

  useEffect(() => {
    return { filteredProducts }
  })

  return { filteredProducts, handleButtonTypeClick, products }
}