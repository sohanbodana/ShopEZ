import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import lg from './logo.jpg';

const imageStyle = {
  width: "3%",
  height: "auto",
  maxHeight: "100px", // Set a maximum height if needed
};

const logo = {
  marginBottom: "1px",
  color: "#e94560",
  fontWeight: "700",
  fontStyle: "italic",
  textDecoration: "none",
};

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const selectedCategoryValue = event.target.value;
    setSelectedCategory(selectedCategoryValue);
    navigate(`/AllCategories`, { state: { selectedCategory: selectedCategoryValue } });
  };

  const clicklg = () => {
    navigate("/");
  };

  const lgu = () => {
    navigate("/Login");
  };

  const sign = () => {
    navigate("/SignUp");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "white", padding: "1px" }}>
        <img onClick={clicklg} src={lg} alt="logo" style={imageStyle} />
        <Link className="navbar-brand font-weight-bold nohover" to="/" style={logo}>
          ShopEZ
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse itemss" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/"><strong>Home</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About"><strong>About</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Support"><strong>Contact</strong></Link>
            </li>
          </ul>
          <div className="btn-group">
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" data-toggle="modal"
              data-target="#loginModal" onClick={lgu}>Login</button>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" data-toggle="modal"
              data-target="#signupModel" onClick={sign}>SignUp</button>
          </div>
        </div>
      </nav>
      <div className="Aa">
        <center>
          <div className="d-flex justify-content-center align-items-center text-center self">
            <Link className="nav-link self2" exact={true} to="/">
              <strong>All Products</strong>
            </Link>
            <Link className="nav-link self2" exact={true} to="/Men's_Clothing">
              <strong>Mens</strong>
            </Link>
            <Link className="nav-link self2" exact={true} to="/Women's_Clothing">
              <strong>Womens</strong>
            </Link>
            <Link className="nav-link self2" exact={true} to="/Electronics">
              <strong>Electronics</strong>
            </Link>

            <Link className="nav-link " exact={true} to="/">
              <select className="selected" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">All Categories </option>
                <option value="smartphones"> smartphones </option>
                <option value="laptops"> laptops </option>
                <option value="fragrances"> fragrances </option>
                <option value="skincare"> skincare </option>
                <option value="groceries"> groceries </option>
                <option value="home-decoration"> home-decoration </option>
                <option value="tops"> tops </option>
                <option value="furniture"> furniture </option>
                <option value="womens-shoes"> womens-shoes </option>
                <option value="womens-watches"> womens-watches </option>
                <option value="womens-bags"> womens-bags </option>
                <option value="mens-watches"> mens-watches </option>
                <option value="mens-shirts"> mens-shirts </option>
                <option value="mens-shoes"> mens-shoes </option>
                <option value="sunglasses"> sunglasses </option>
                <option value="automotive"> automotive </option>
                <option value="motorcycle"> motorcycle </option>
                <option value="lighting"> lighting </option>
              </select>
            </Link>

            <Link className="nav-link self2 " exact={true} to="/Cart">
              <strong>CART</strong>
            </Link>
          </div>
        </center>
      </div>
    </>
  );
};

export default Navbar;
