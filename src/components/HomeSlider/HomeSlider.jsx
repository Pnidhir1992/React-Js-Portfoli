import React from "react";
import Slider from "react-slick";
import { Testimonials } from "../../Api/Testimonials"; // Ensure this path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { MdOutgoingMail, MdOutlinePhoneCallback } from "react-icons/md";
import "./New-Slider.css";

export const HomeSlider = () => {
  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container">
        <div className="line-and-text">
          <hr />
          <h2>
            Clint <span>Testimonial</span>
          </h2>
        </div>
        <div className="grid grid-one shadow-new">
          <Slider {...settings}>
            {Testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="image-rounded"
                />
                <h2 className="testimoneal-name">{testimonial.name}</h2>
                <p className="service">Service:- {testimonial.service}</p>
                <hr className="divider" />
                <p className="testimoneal-text">{testimonial.testimonial}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
