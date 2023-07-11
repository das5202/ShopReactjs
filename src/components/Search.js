import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductData from './ProductData';

const SearchResults = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query') || '';
    setSearchTerm(query);
    filterProducts(query);
  }, [location.search]);

  const filterProducts = (query) => {
    const results = ProductData.filter((product) =>
      product.ProductName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((product) => (
            <div key={product.id}>
              <img src={product.ProductImage} alt={product.ProductName} />
              <p>Name: {product.ProductName}</p>
              <p>Price: {product.ProductPrice}</p>
              <p>Category: {product.ProductCategory}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
