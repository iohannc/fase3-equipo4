import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper, Logo2, Content } from "./Header.styles";

const Header = () => {
  return (
    <Content className="columns is-centered">
      <Logo2 src={logo} alt="Logo" />
    </Content>
  );
};

export default Header;
