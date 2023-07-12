import React, { useState, useEffect } from 'react';
import ProductWithCart from './ProductWithCart';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage when component mounts
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <ProductWithCart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Home;
