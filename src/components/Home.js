import React from 'react';
import ProductWithCart from './ProductWithCart';

const Home = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <h2>Home Page</h2>
      <ProductWithCart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Home;
