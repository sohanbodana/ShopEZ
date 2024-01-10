import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import SliderHome from './Slider';
import Footer from './footer/Footer';
import SearchBar from './shop/SearchBar';
import { useCartDispatch } from './CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import imageStyle from './javasc.js';
import Check from './Check';

const Home = () => {

  const navigate = useNavigate();

  /////////////////  ADD to cart prduct when click AddCart
  const dispatch = useCartDispatch();
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('./Cart');
  };

  const [products, setProducts] = useState([]);          /// product Array  [correct product ,new after update product]
  const [searchQuery, setSearchQuery] = useState('');  
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);   /// First API
        setLoading(false);

        // console.log(setProducts2);

      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
                <img src={product.image} alt={product.title} style={imageStyle} onClick={()=>clickButton(product)}/>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)} className="btn btn-warning m-2">
                  ADD TO CART
                </button>
                <button onClick={()=>clickButton(product)} className="btn btn-primary">
                  BUY NOW
                </button>
              </div>
            ))}
          </div>
        )}

      <Check/>
      </div>
      <Footer />
    </>
  );
};

export default Home;

