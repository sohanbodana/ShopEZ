// Cart.js
import React from 'react';
import { useCartState, useCartDispatch } from './CartContext';
import Navbar from './navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
  const cartItems = useCartState();
  const dispatch = useCartDispatch();
  const navigate = useNavigate();    /// navigate to new page according to your need

  const handleDelete = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleCheckout = () => {
    Swal.fire("Successfull Booking!", "", "Success");
    navigate('/');
  };

  const crt = {
    padding: "4px",
    background: "#74ebd5",
    background: 'linear-gradient(to right, #ACB6E5, #74ebd5)',
  };
  const imageStyle = {
    margin: "10px",
    marginRight: "15px",
    width: '50px',
    height: '50px',
    verticalAlign: 'middle',
  };

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Navbar />
      <center>
        <h2 style={crt}>Shopping Cart 🛒</h2>
      </center>
      <div>
        <center>
          <ul style={{ paddingLeft: '0px', listStyleType: 'none' }}>
            {cartItems.map((item) => (
              <li key={item.id} className='border'>
                <img src={item.image || item.thumbnail} alt={item.title} style={imageStyle} />
                <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <p style={{ fontSize: 'large', fontWeight: 'bold', display: 'inline' }}>
                    {item.title} --- ${item.price}
                  </p>
                  <button onClick={() => handleDelete(item.id)} className='btn btn-danger m-2'>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </center>
        <center>
          <p style={{ fontSize: 'large', fontWeight: 'bold' }}>
            Total Price: <strong> ${totalPrice.toFixed(2)} </strong>
          </p>
          <button onClick={handleCheckout} className='btn btn-success'>
            Proceed to Checkout
          </button>
        </center>
      </div>
    </div>
  );
};

export default Cart;
