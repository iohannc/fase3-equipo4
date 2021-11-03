import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper, Logo } from "./Header.styles";
import { NavLink } from "react-router-dom";
import { Limit } from "../../GlobalStyle";
const Header = () => {
  return (
    <Wrapper role="navigation" className="navbar">
      <div className="navbar-brand">
        <Logo className="navbar-item" src={logo} alt="Logo" />
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Limit>
            <NavLink to="/login/">ENTRAR</NavLink>
          </Limit>
        </div>
        <div className="navbar-item">
          <Limit>
            <NavLink to="/register/">REGISTRARSE</NavLink>
          </Limit>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
