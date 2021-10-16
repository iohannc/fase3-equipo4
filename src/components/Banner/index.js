import React from "react";
// Components
import SearchForm from "../SearchForm";
// Styles
import {
  Wrapper,
  BannerImage,
  RightSideBanner,
  Categories,
} from "./Banner.styles";
import vampiro from "../../assets/images/vampiro.jpg";

const Banner = () => {
  return (
    <Wrapper className="container">
      <BannerImage className="image">
        <img src={vampiro} alt="Vampiro" />
      </BannerImage>
      <RightSideBanner>
        <h1>BIENVENIDO</h1>
        <SearchForm />
        <Categories />
      </RightSideBanner>
    </Wrapper>
  );
};

export default Banner;
