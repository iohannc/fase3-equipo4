import React from "react";
// Styles
import { BannerCentered } from "./Banner.styles";

const Banner = (props) => {
  return (
    <BannerCentered>
      <h1>{props.title}</h1>
    </BannerCentered>
  );
};

export default Banner;
