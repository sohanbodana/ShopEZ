import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../navbar/Navbar.css';
import lg from '../navbar/logo.jpg';

const imageStyle = {
  width: "3%",
  height: "auto",
  maxHeight: "100px",
};

const logo = {
  marginBottom: "1px",
  color: "#e94560",
  fontWeight: "700",
  fontStyle: "italic",
  textDecoration: "none",
};

const Navbar2 = () => {
  const navigate = useNavigate();
  
 

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
      <nav className="navbar navbar-expand-lg navbar-light topn" style={{ backgroundColor: "white", padding: "1px" }}>
        <img onClick={clicklg} src={lg} alt="logo" style={imageStyle} />
        <Link className="navbar-brand font-weight-bold nohover" to="/" style={logo}>
          ShopEZ
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse itemss" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active"><strong>Home</strong></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About" activeClassName="active"><strong>About</strong></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Support" activeClassName="active"><strong>Contact</strong></NavLink>
            </li>
          </ul>
          <div className="btn-group">
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={lgu}>Login</button>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={sign}>SignUp</button>
          </div>
        </div>
      </nav>
    
    </>
  );
};

export default Navbar2;
