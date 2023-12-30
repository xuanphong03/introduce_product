import React from "react";
import PropTypes from "prop-types";

import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";

import Banner from "./components/Banner/Banner";

const SLIDE_LIST = [
  { id: 1, component: Slider1 },
  { id: 2, component: Slider2 },
  { id: 3, component: Slider3 },
];

Home.propTypes = {};

function Home(props) {
  return (
    <div>
      <Banner sliderList={SLIDE_LIST} />
    </div>
  );
}

export default Home;
