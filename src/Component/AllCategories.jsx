import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import SliderHome from './Slider';
import Footer from './footer/Footer';
import SearchBar from './shop/SearchBar';
import { useCartDispatch } from './CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import imageStyle from './javasc.js';

const AllCategories = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { selectedCategory } = location.state || {};

  console.log(selectedCategory);

  /////////////////  ADD to cart prduct when click AddCart
  const dispatch = useCartDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('/Cart');
  };

  const [products, setProducts] = useState([]);          /// product Array  [correct product ,new after update product]
  const [searchQuery, setSearchQuery] = useState('');  
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
    
        const response = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
        console.log(selectedCategory);

      } catch (error) {
        console.error('Error fetching products:', error.message);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  /// buy button 
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(selectedProduct);

  const clickButton = (product) => {
    setSelectedProduct(product);
    navigate(`/details`, { state: { selectedProduct: product } });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <Navbar />
      <div>
        <div className="search-bar">
          <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
          <section className="home">
            <div className="container d_flex">
              <SliderHome />
            </div>
          </section>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
             <div className="product-list Aa">
             {filteredProducts.map((product) => (
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
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllCategories;

