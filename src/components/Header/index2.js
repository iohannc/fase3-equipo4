import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper, Logo, Content } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper className="navbar">
      <Content className="container columns is-centered">
        <Logo src={logo} alt="Logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
