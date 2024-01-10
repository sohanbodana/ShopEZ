import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import '../Home.css';
import SliderHome from '../Slider';
import Footer from '../footer/Footer';
import SearchBar from './SearchBar';
import { useCartDispatch } from '../CartContext';
import imageStyle from '../javasc';

const Electronics = () => {
  const dispatch=useCartDispatch();
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('/Cart');
  };

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get('https://fakestoreapi.com/products');
        const response = await axios.get('https://fakestoreapi.com/products/category/electronics');
        // const response = await axios.get('https://api.escuelajs.co/api/v1/products');
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
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div>
      <div className="search-bar">
         <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
          <section className="home">
          <div className="container d_flex">
            <SliderHome />
          </div>
          </section>
      </div>
         <div className="product-list Aa">
          {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} style={imageStyle}  onClick={()=>clickButton(product)}  />
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
    </div>
    <Footer/>
    </>
  );
};

export default Electronics;
