import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>ShopEZ</h1>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>    
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>ABC Tower,Vijay nagar, Indore 452001 MP INDIA</li>
              <li>Email: SBbusiness@gmail.com</li>
              <li>Phone: +91 1800180099</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
