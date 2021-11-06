import React from "react";
// Components
import SearchForm from "../SearchForm";
// Styles
import {
  Wrapper,
  BannerImage,
  BannerCentered,
  //Categories,
} from "./Banner.styles";
import vampiro from "../../assets/images/vampiro.jpg";
import CatTitle from "../Title";
import Categories from "../Categories";

import logo from "../../assets/images/logo.jpg";
import { Wrapper2, Logo3 } from "../Header/Header.styles";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const leyenda = props.origen === undefined ? 'BIENVENIDO' : props.origen;
  let bloquecodigo = "";
  if (leyenda !== ' ') {
    bloquecodigo = <BannerImage className="image"><img src={vampiro} alt="Vampiro" /></BannerImage>;

    // <BannerImage className="image">
    //   <img src={vampiro} alt="Vampiro" />
    // </BannerImage>

  }
  return (
    <Wrapper className="container">
      <div className="navbar-brand">
        <Link to="/">
          <Wrapper2 className="columns is-left">
            <Logo3 src={logo} alt="Logo" />
          </Wrapper2>
        </Link>
      </div>

      <div className="navbar-item">
        <SearchForm />
      </div>
      <div className="navbar-end">
        <Wrapper2 className="navbar-item">
          <p>Hola{" "}</p><p id="username"></p>
        </Wrapper2>

      </div>
    </Wrapper>
  );
};

export default Banner;
