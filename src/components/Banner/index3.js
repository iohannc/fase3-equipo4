import React from "react";
// Components
import SearchForm from "../SearchForm";
// Styles
import {
  Wrapper
} from "./Banner.styles";
import logo from "../../assets/images/logo.jpg";
import { Wrapper2, Logo3 } from "../Header/Header.styles";
import { Link } from "react-router-dom";

const Banner = (props) => {

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
