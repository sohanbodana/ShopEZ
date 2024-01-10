import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import '../Home.css';
import SliderHome from '../Slider';
import Footer from '../footer/Footer';
import { useCartDispatch } from '../CartContext';
import imageStyle from '../javasc';

const Products = () => {
  
  //// Adding cart
  const dispatch=useCartDispatch();
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('/Cart');
  };


  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get('https://fakestoreapi.com/products');
        // const response = await axios.get('https://fakestoreapi.com/products/category/men%27s%20clothing');
        // const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');

        // const response = await axios.get('https://dummyjson.com/carts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const navigate=useNavigate();
  /// buy button 
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(selectedProduct);

  const clickButton = (product) => {
    setSelectedProduct(product);
    navigate(`/details`, { state: { selectedProduct: product } });
  };

  return (
    <>
    <Navbar/>
    <div>
    <section className='home'>
        <div className='container d_flex'>
          {/* <Categories /> */}
          <SliderHome/>
        </div>
    </section>
    <div className="product-list Aa">
        {products./*slice(0, 51)*/map((product) => (
          <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} style={imageStyle} onClick={()=>clickButton(product)} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.brand}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)} className='btn btn-warning m-2'>ADD TO CART</button>
            <button onClick={() => clickButton(product)} className="btn btn-primary">
                BUY NOW</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Products;
