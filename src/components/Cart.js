import React from 'react';
import { useEffect } from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  

  return (
    <div>
      <h2>Cart Products:</h2>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.ProductImage} alt={item.ProductName} />
              <p>{item.ProductName}</p>
              <p>Price: {item.ProductPrice}</p>
              <p>Category: {item.ProductCategory}</p>
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))
        ) : (
          <li>No items in cart</li>
        )}
      </ul>
    </div>
  );
};

export default Cart;
