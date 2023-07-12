import {React,useState} from 'react';
import ProductData from './ProductData';


const ProductWithCart = ({ addToCart }) => {
    
  return (
    <div>
      <div className="product-container">
        {ProductData.map((product) => (
          <div key={product.ProductId}>
            <div>
              <img src={product.ProductImage} alt={product.ProductName} />
            </div>
            <div>
              <h3>{product.ProductName}</h3>
              <p>Price: {product.ProductPrice}</p>
              <p>Category: {product.ProductCategory}</p>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductWithCart;
