import React from "react";
// Components
import Header from "./components/Header/index2";
import Banner from "./components/Banner/index2";
import FormSimple from "./components/FormSimple/";
import { GlobalStyle, Columnas, H2 } from "./GlobalStyle";
import { Link } from "react-router-dom";
function login() {
  const url = "https://historiasdeterror.herokuapp.com/v1/usuarios/entrar";
  return (
    <>
      <Header />
      <Banner title="BIENVENIDOS" />
      <H2>
        <h2>INICIAR SESIÓN</h2>
      </H2>
      <Columnas className="columns">
        <div className="column is-one-third"></div>
        <div className="column is-one-third">
          <FormSimple placeholder="Usuario o correo electronico" />
        </div>
      </Columnas>
      <Columnas className="columns">
        <div className="column is-one-third"></div>
        <div className="column is-one-third">
          <FormSimple placeholder="Contraseña" />
        </div>
      </Columnas>
      <div className="columns is-centered">
        <div className="column is-narrow">
          <button className="button is-rounded is-hovered is-small is-centered">
            Entrar
          </button>
        </div>
      </div>
      <div className="columns is-centered ">
        <H2 className="column is-narrow">
          <h2>¿Nuevo por aqui?</h2>
          <Link to="/register/">Crear una cuenta</Link>
        </H2>
      </div>
      <GlobalStyle />
    </>
  );
}

export default login;
