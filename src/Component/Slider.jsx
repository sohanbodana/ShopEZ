import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from './slider1.jpg';
import slider2 from './slider2.jpeg';
import slider3 from './slider3.jpg';
import './slider.css';
import { useNavigate } from "react-router-dom";

const SliderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const imageStyle = {
    width: "100%",  // Set the width to 100% to make the image responsive
    height: "auto", // Maintain the aspect ratio
    maxHeight: "200px", // Set a maximum height if needed
  };
 
  const navigate=useNavigate();

  const watch =()=>{
    navigate(`/AllCategories`, { state: { selectedCategory: "watch" } });
  }

  return (
    <Slider {...settings} className="ecommerce-slider">
      <div>
        <img  onClick={watch} src={slider1} alt="Slide 1" style={imageStyle} />
      </div>
      <div>
        <img src={slider2} alt="Slide 2" style={imageStyle} />
      </div>
      <div>
        <img src={slider3} alt="Slide 3" style={imageStyle} />
      </div>
    </Slider>
  );
};

export default SliderHome;
