import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/Login';
import RegistrationForm from './components/Register';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductWithCart from './components/ProductWithCart';
import SearchResults from './components/Search';
import ProductData from './components/ProductData';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(isLoggedIn === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    if (isLoggedIn) {
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCartItems);
    } else {
      console.log('User is not logged in');
      // Handle the case when the user is not logged in
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setCartItems([]);
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ProductWithCart
                addToCart={addToCart}
                productData={ProductData}
                isLoggedIn={isLoggedIn}
              />
            )}
          />
          <Route path="/search" component={SearchResults} />
          <Route
            path="/login"
            render={() => <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/register" component={RegistrationForm} />
          <Route
            path="/cart"
            render={() => (
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
