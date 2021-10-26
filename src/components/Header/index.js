import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper, Logo, NavbarItems, Content } from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper className="navbar">
      <Content className="container">
        <div className="navbar-brand">
          <Logo className="navbar-item" src={logo} alt="Logo" />
        </div>
        <NavbarItems className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/login/">
              ENTRAR
            </Link>
            <Link className="navbar-item" to="/">
              REGISTRARSE
            </Link>
          </div>
        </NavbarItems>
      </Content>
    </Wrapper>
  );
};

export default Header;
