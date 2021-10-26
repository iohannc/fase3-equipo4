import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper, Logo } from "./Header.styles";
import { Link } from "react-router-dom";
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
            <Link to="/login/">ENTRAR</Link>
          </Limit>
        </div>
        <div className="navbar-item">
          <Limit>
            <Link to="/register/">REGISTRARSE</Link>
          </Limit>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
