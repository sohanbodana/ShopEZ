import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { useCartDispatch } from './CartContext';



const Check = () => {

  const navigate=useNavigate()
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(selectedProduct);
  /////////////////  ADD to cart prduct when click AddCart
  const dispatch = useCartDispatch();
  const addToCart = (product) => {
    dispatch(
        { type: 'ADD_TO_CART', payload: product }
    );
    navigate('./Cart');
  };

  const clickButton = (product) => {
    setSelectedProduct(product);
    navigate(`/details`, { state: { selectedProduct: product } });
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
    
        const response = await fetch('https://dummyjson.com/products?limit=100');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error.message);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '140px',
    border:'2px Solid green',
    boxShadow:'2px 2px cyan',
  };

  return (
    <>
    <div className="product-list Aa">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt={product.title} style={imageStyle} onClick={()=>clickButton(product)} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>Rating: {product.rating}</p>
                <p>Brand: {product.brand}</p>
                <button  onClick={() => addToCart(product)}  className="btn btn-warning m-2">
                  ADD TO CART
                </button>
                <button onClick={()=>clickButton(product)} className="btn btn-primary">
                  BUY NOW
                </button>
              </div>
            ))}
          </div>
    </>
  );
};

export default Check;
