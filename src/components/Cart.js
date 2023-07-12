import React, { useEffect, useState } from 'react';

import ProductWithCart from './ProductWithCart';


const Cart = ({ location }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const itemsParam = urlParams.get('items');
    if (itemsParam) {
      const parsedItems = JSON.parse(decodeURIComponent(itemsParam));
      setCartItems(parsedItems);
    }
  }, [location.search]);

  return (
    <div>
      <h2>Cart Products:</h2>
      <ProductWithCart cartItems={cartItems} setCartItems={setCartItems} />

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
