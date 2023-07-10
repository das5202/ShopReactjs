import React, { useState } from 'react';
import ProductData from './ProductData';

const Search = ({ handleSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const results = ProductData.filter((product) =>
      product.ProductName.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
    handleSearchResults(results); // Call the handleSearchResults function with the results
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by product name"
      />
      {searchResults.length > 0 && (
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
      )}
    </div>
  );
};

export default Search;
