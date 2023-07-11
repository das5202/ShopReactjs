import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/Login';
import RegistrationForm from './components/Register';
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';
import SearchResults from './components/Search';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/cart" component={Cart} />
          <Route path="/product" component={Product} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
