import React from "react";
import Navbar from "../navbar/Navbar";
import { useLocation, useNavigate,  } from "react-router-dom";
import Swal from "sweetalert2";
import imageStyle from "../javasc";

const Paymentpage = () => {

    const navigate=useNavigate()
    const location = useLocation();
    const { selectedProduct } = location.state || {};

    console.log(selectedProduct);

    const Alert1=()=>{
        Swal.fire("Successfull Booking!", "", "Success");
        navigate('/');
    }
    return (
        <>
            <Navbar />
            <div>
                <center>
                <h2 style={{padding:"10px",background:"yellow"}}>Payment Page</h2>
                </center>
                <div>
                    <center>
                    <img className="w-50" src={selectedProduct.image || selectedProduct.thumbnail || selectedProduct.thumbnail} alt={selectedProduct.title} style={imageStyle} />
                    <h3>{selectedProduct.title ||selectedProduct.name}</h3>
                    <p onClick={Alert1} className="btn btn-success">Price: $ {selectedProduct.price}</p>
                    </center>
                    {/* Add more product details as needed */}
                </div>
            </div>

        </>

    );
}

export default Paymentpage;