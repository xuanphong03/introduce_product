import React from "react";
import PropTypes from "prop-types";
import ImageBanner from "../../../../assets/images/slider2.jpg";

Banner.propTypes = {
  sliderList: PropTypes.array,
};

function Banner() {
  return (
    <img
      alt="slider"
      src={ImageBanner}
      className="w-full h-[var(--height-banner)]"
    />
  );
}

export default Banner;
