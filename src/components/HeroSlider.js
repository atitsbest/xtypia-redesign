import React from "react";
import Slider from "react-slick";
import { createGlobalStyle } from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
  .slick-dots.slick-dots {
        bottom: 15px;
        li button::before {
            font-size: 14px;
        }
  }
`;

export const HeroSlider = ({ children }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <React.Fragment>
      <Slider {...settings}>{children}</Slider>
      <GlobalStyle />
    </React.Fragment>
  );
};
