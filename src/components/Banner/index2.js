import React from "react";
// Components
// Styles
import { Wrapper, BannerCentered } from "./Banner.styles";

const Banner = (props) => {
  return (
    <BannerCentered>
      <h1>{props.title}</h1>
    </BannerCentered>
  );
};

export default Banner;
