import Header from './Header';
import  ProductData  from './ProductData';
import '../Styles/Product.css';
const HandleCart=()=>{}
 const Product = () => {
    return (
       <div>
        
      <div  class="product-container">
      
        {ProductData.map((product) => (
          <div key={product.ProductId}>
            <div>
              <img src={product.ProductImage} alt={product.ProductName} />
            </div>
            <div>
              <h3>{product.ProductName}</h3>
              <p>Price: {product.ProductPrice}</p>
              <p>Category: {product.ProductCategory}</p>
              <button onclick={HandleCart}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default Product;
  