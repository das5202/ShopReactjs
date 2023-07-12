import React, { useEffect, useState } from 'react';
import ProductWithCart from './ProductWithCart';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <div>
      <h2>Cart Products:</h2>
      <ProductWithCart addToCart={addToCart} />

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <p>{item.ProductName}</p>
            <p>Price: {item.ProductPrice}</p>
            <p>Category: {item.ProductCategory}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
