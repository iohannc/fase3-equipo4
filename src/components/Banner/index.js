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

const Banner = (props) => {
  const leyenda = props.origen === undefined?'BIENVENIDO':props.origen;
  let bloquecodigo = "";
  if(leyenda !== ' ' ) {
    bloquecodigo = <BannerImage className="image"><img src={vampiro} alt="Vampiro" /></BannerImage>;

    // <BannerImage className="image">
    //   <img src={vampiro} alt="Vampiro" />
    // </BannerImage>

  }
  return (
    <Wrapper className="container">
      {bloquecodigo}
      <RightSideBanner>
        <h1>{leyenda}</h1>
        <SearchForm />
        <CatTitle align="center" name="CATEGORÍAS" />
        <Categories
          data={[
            "Cortos para niños",
            "Crimen real",
            "Fanfiction",
            "Fantasia",
            "Halloween",
            "Paranormal",
            "Para no dormir",
            "Personal",
            "Real",
            "Urbano",
            "Vida"
          ]}
        />
      </RightSideBanner>
    </Wrapper>
  );
};

export default Banner;
