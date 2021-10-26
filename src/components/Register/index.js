import React from "react";
// Components
import Header from "../Header/index2";
import Banner from "../Banner/index2";
import FormSimple from "../FormSimple";
import { GlobalStyle, Columnas, H2 } from "../../GlobalStyle";
import { Link } from "react-router-dom";
function reg() {
  return (
    <>
      <Header />
      <Banner title="Crear cuenta" />
      <H2>
        <h3>Acerca de ti</h3>
      </H2>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple className="is-small" placeholder="Nombre(s)" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple placeholder="Apellido paterno" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple placeholder="Apellido materno" />
        </div>
      </Columnas>
      <H2>
        <h3 className="redtitle">Fecha de nacimiento</h3>
      </H2>
      <Columnas className="columns is-centered">
        <div className="column is-one-fifth is-narrow">
          <FormSimple placeholder="Dia" />
        </div>
        <div className="column is-one-fifth is-narrow">
          <FormSimple placeholder="Mes" />
        </div>
        <div className="column is-one-fifth is-narrow">
          <FormSimple placeholder="Año" />
        </div>
      </Columnas>
      <div className="columns is-centered">
        <div className="column is-narrow">
          <button className="button is-rounded is-hovered is-small is-centered">
            <Link to="/register/s1">Continuar</Link>
          </button>
        </div>
      </div>
      <div className="columns is-centered ">
        <H2 className="column is-narrow">
          <h2>¿Ya tienes cuenta?</h2>
          <Link to="/login/">Iniciar sesión</Link>
        </H2>
      </div>
      <GlobalStyle />
    </>
  );
}

export default reg;
