import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/Login';
import RegistrationForm from './components/Register';
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route exact path="/">
            
            <Home />
          </Route>
          <Route path="/login">
            
            <LoginForm />
          </Route>
          <Route path="/register">
            
            <RegistrationForm />
          </Route>
          <Route path="/cart">
            
            <Cart />
          </Route>
          <Route path="/product">
            
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
