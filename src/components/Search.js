import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ProductData from './ProductData';

const SearchResults = () => {
  const location = useLocation();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = ProductData.filter((product) =>
      product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleBack = () => {
    setSearchTerm('');
    setSearchResults([]);
    history.goBack();
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by product name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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
