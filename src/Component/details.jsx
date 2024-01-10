import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imageStyle from "./javasc";
import Navbar from "./navbar/Navbar";
import './details.css';
const Details = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedProduct } = location.state || {};

    const Alert1 = () => {
        navigate('/paymentpage',{state:{selectedProduct}});
    };

    return (
        <>
            <Navbar />
            <div>
                <center>
                    <h2 style={{ padding: "10px", background: "" }}>Product</h2>
                </center>
                <div>
                    <center>
                        <img className="w-50" src={selectedProduct.image || selectedProduct.thumbnail || selectedProduct.thumbnail} alt={selectedProduct.title} style={imageStyle} />
                        <div className="img123">
                            {selectedProduct.images && selectedProduct.images.map((image, index) => (
                                <img className="img1234" key={index} src={image} alt={`${selectedProduct.title}-image-${index}`} style={{ width: '100px', margin: '5px' }} />
                            ))}
                        </div>
                        <h3>{selectedProduct.title || selectedProduct.name}</h3>
                        <h4>{selectedProduct.description || selectedProduct.name}</h4>
                        <h4>{selectedProduct.category || selectedProduct.categories}</h4>
                        <p>Rating: {selectedProduct.rating && selectedProduct.rating.rate ||selectedProduct.rating}</p>
                        <p>Rating Count: {selectedProduct.rating && selectedProduct.rating.count ||"120"}</p>
                        <p>Discount: {selectedProduct.discountPercentage||"10"}%</p>
                        <p>Stock: {selectedProduct.stock} Available</p>
                        <p>Brand: {selectedProduct.brand||"XYZ"}</p>
                        <p onClick={Alert1} className="btn btn-success">Price: $ {selectedProduct.price}</p>
                    </center>
                </div>
            </div>
        </>
    );
};

export default Details;
