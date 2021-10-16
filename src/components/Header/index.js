import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper, Logo, NavbarItems, Content } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper className="navbar">
    <Content className="container">
      <div className="navbar-brand">
        <Logo className="navbar-item" src={logo} alt="Logo" />
      </div>
      <NavbarItems className="navbar-menu">
        <div className="navbar-end">
          <a href className="navbar-item">
            ENTRAR
          </a>
          <a href className="navbar-item">
            REGISTRO
          </a>
        </div>
      </NavbarItems>
      </Content>
    </Wrapper>
  );
};

export default Header;
