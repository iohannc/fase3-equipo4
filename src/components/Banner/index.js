import React from "react";
// Components
import SearchForm from "../SearchForm";
// Styles
import {
  Wrapper,
  BannerImage,
  RightSideBanner,
  //Categories,
} from "./Banner.styles";
import vampiro from "../../assets/images/vampiro.jpg";
import CatTitle from "../Title";
import Categories from "../Categories";

const Banner = () => {
  return (
    <Wrapper className="container">
      <BannerImage className="image">
        <img src={vampiro} alt="Vampiro" />
      </BannerImage>
      <RightSideBanner>
        <h1>BIENVENIDO</h1>
        <SearchForm />
        <CatTitle align="center" name="CATEGORÍAS" />
        <Categories
          data={[
            "Cortos para niños",
            "Fantansia",
            "Real",
            "Halloween",
            "Crimen real",
            "Personal",
            "Fanfiction",
            "Vida",
            "Para no dormir",
            "Paranormal",
            "Urbano",
            "Familiar"
          ]}
        />
      </RightSideBanner>
    </Wrapper>
  );
};

export default Banner;
