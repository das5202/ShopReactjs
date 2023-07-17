import React from 'react';
import { useHistory } from 'react-router-dom';
import ProductData from './ProductData';
import '../Styles/Product.css';

const ProductWithCart = ({ addToCart, isLoggedIn }) => {
  const history = useHistory();

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      addToCart(product);
    } else {
      
      history.push('/login');
    }
  };

  return (
    <div>
      <div className="product-container">
        {ProductData.map((product) => (
          <div key={product.ProductId} className="product-item">
            <div className="Product">
              <img src={product.ProductImage} alt={product.ProductName} />
            </div>
            <div className="product-info">
              <h3>{product.ProductName}</h3>
              <p>Price: {product.ProductPrice}</p>
              <p>Category: {product.ProductCategory}</p>
              <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductWithCart;
