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

    const orderNum = (Math.random() * 1000).toFixed(0);

    const Alert1 = async () => {
        const { isConfirmed } = await Swal.fire({
          icon: "success",
          title: "Your order has been placed successfully!",
          html: `<p>Thank you for shopping with us! Order Number: ${orderNum}</p>`,
          showCancelButton: true,
          confirmButtonText: 'Continue',
        });
      
        if (isConfirmed) {
          navigate('/');
        }
      };      
    return (
        <>
            <Navbar />
            <div>
                <center>
                <h2 style={{padding:"10px"}}>Payment Page</h2>
                </center>
                <div>
                    <center>
                    <img className="w-50" src={selectedProduct.image || selectedProduct.thumbnail} alt={selectedProduct.title} style={imageStyle} />
                    <h3>{selectedProduct.title ||selectedProduct.name}</h3>
                    <p onClick={Alert1} className="btn btn-success">Price: $ {selectedProduct.price}</p>
                    </center>
                    {/* Add more product details as needed  Or may be imple. map function for more product */}
                </div>
            </div>

        </>

    );
}

export default Paymentpage;