import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>About Us</h2>
        <p>
          Welcome to Our E-commerce store! We are dedicated to providing you with the best online shopping
          experience. Our team works hard to curate a selection of high-quality products, ranging from
          electronics to fashion, and everything in between.
        </p>
        <p>
          At Our Store, customer satisfaction is our top priority. We strive to offer competitive prices,
          timely delivery, and excellent customer service. Whether you are a tech enthusiast, a fashionista, or
          someone looking for the perfect gift, we have something for everyone.
        </p>
        <p>
          Thank you for choosing Our Store for your online shopping needs. If you have any questions or
          feedback, feel free to contact us. Happy shopping!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
