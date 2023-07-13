import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/Login';
import RegistrationForm from './components/Register';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductWithCart from './components/ProductWithCart';
import SearchResults from './components/Search';

const ProductData = [
  // Define your product data here
];


  const App = () => {
    const [cartItems, setCartItems] = useState(() => {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
  
    const addToCart = (product) => {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          
          <Route path="/cart" render={() => <Cart cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />} />

          <Route path="/product">
            <ProductWithCart addToCart={addToCart} productData={ProductData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
