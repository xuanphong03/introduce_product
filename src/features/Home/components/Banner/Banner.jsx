import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

Banner.propTypes = {
  sliderList: PropTypes.array,
};

function Banner({ sliderList }) {
  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <Slider {...settings}>
      {sliderList.map((slider) => {
        return (
          <img
            key={slider.id}
            src={slider.component}
            alt="slider"
            className="w-full h-[var(--height-banner)]"
          />
        );
      })}
    </Slider>
  );
}

export default Banner;
