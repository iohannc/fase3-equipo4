import React from "react";
// Assets
import logo from "../../assets/images/logo.jpg";
// Styles
import { Wrapper2, Logo3 } from "./Header.styles";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper2 role="navigation" className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <Wrapper2 className="columns is-centered">
            <Logo3 src={logo} alt="Logo" />
          </Wrapper2>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">Usuario</div>
      </div>
    </Wrapper2>
  );
};

export default Header;
