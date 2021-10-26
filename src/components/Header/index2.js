import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper, Logo2 } from "./Header.styles";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Link to="/">
      <Wrapper className="columns is-centered">
        <Logo2 src={logo} alt="Logo" />
      </Wrapper>
    </Link>
  );
};

export default Header;
