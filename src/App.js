import React, {  } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from "./Component/Home";
import Navbar from "./Component/navbar/Navbar";
import About from "./Component/About";
import SliderHome from "./Component/Slider";
import Footer from "./Component/footer/Footer";
import MensCloth from "./Component/shop/Mens";
import WomenCloth from "./Component/shop/Woman";
import Jewelery from "./Component/shop/Jewelery";
import Electronics from "./Component/shop/Electronics";
import Products from "./Component/shop/Products";
import SearchBar from "./Component/shop/SearchBar";
import Cart from "./Component/AddCart";
import { CartProvider } from "./Component/CartContext";
import Check from "./Component/Check";
import LogIn from "./Component/login";
import Signup from "./Component/signup";
import Support from "./Component/support";
import AllCategories from "./Component/AllCategories";
import Paymentpage from "./Component/payment/Payment";

const App=()=> {
  return (
    <Router>
      <div>
        <CartProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/sliderhome" element={<SliderHome/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/Men's_Clothing" element={<MensCloth/>} />
          <Route path="/Women's_Clothing" element={<WomenCloth/>} />
          <Route path="/Jewelery" element={<Jewelery/>} />
          <Route path="/Electronics" element={<Electronics/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Search" element={<SearchBar/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/check" element={<Check/>} />
          <Route path="/Login" element={<LogIn/>} />
          <Route path="/SignUp" element={<Signup/>} />
          <Route path="/Support" element={<Support/>} />
          <Route path="/AllCategories" element={<AllCategories/>} />
          <Route path="/paymentpage" element={<Paymentpage/>} />

        </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
