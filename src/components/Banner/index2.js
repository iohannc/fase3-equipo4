import React from "react";
// Components
// Styles
import { Wrapper, Banners } from "./Banner.styles";

const Banner = () => {
  return (
    <Wrapper className="container">
      <Banners className="is-small">
        <h1>BIENVENIDO</h1>
      </Banners>
    </Wrapper>
  );
};

export default Banner;
