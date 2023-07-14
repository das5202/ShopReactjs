import React, { useEffect, useState } from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  


  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.ProductId === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  
    const updatedGroupedCartItems = updatedCartItems.reduce((acc, item) => {
      const existingItem = acc.find((el) => el.ProductId === item.ProductId);
  
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
  
      return acc;
    }, []);
  
    setCartItems(updatedCartItems);
    setCartItems(updatedGroupedCartItems); // Update cartItems instead of groupedCartItems
  };
  
  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.ProductId === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  
    const updatedGroupedCartItems = updatedCartItems.reduce((acc, item) => {
      const existingItem = acc.find((el) => el.ProductId === item.ProductId);
  
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
  
      return acc;
    }, []);
  
    setCartItems(updatedCartItems);
    setCartItems(updatedGroupedCartItems); // Update cartItems instead of groupedCartItems
  };
  
  
  

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [setCartItems]);

  useEffect(() => {
    // Calculate the total amount
    let total = 0;

    for (const item of cartItems) {
      total += item.ProductPrice * item.quantity;
    }

    setTotalAmount(total);
  }, [cartItems]);

  const groupedCartItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((el) => el.ProductId === item.ProductId);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }

    return acc;
  }, []);

  return (
    <div>
      <h2>Cart Products:</h2>
      <p>Total amount: {totalAmount}</p>
      {groupedCartItems && groupedCartItems.length > 0 ? (
        groupedCartItems.map((item, index) => (
          <div key={index}>
            <img src={item.ProductImage} alt={item.ProductName} />
            <p>{item.ProductName}</p>
            <p>Price: {item.ProductPrice}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => increaseQuantity(item.ProductId)}>+</button>
            <button onClick={() => decreaseQuantity(item.ProductId)}>-</button>
          </div>
        ))
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default Cart;
