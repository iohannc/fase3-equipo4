import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper, Logo } from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper role="navigation" className="navbar">
      <div className="navbar-brand">
        <Logo className="navbar-item" src={logo} alt="Logo" />
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/login/">ENTRAR</Link>
          <Link to="/">REGISTRARSE</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
