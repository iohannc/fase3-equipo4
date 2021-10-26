import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper, Logo2 } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper className="columns is-centered">
      <Logo2 src={logo} alt="Logo" />
    </Wrapper>
  );
};

export default Header;
