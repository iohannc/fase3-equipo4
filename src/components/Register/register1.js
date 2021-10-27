import React from "react";
// Components
import Header from "../Header/index2";
import Banner from "../Banner/index2";
import FormSimple from "../FormSimple";
import { GlobalStyle, Columnas, H2, buttonBack } from "../../GlobalStyle";
import { Link } from "react-router-dom";
function reg() {
  const stylebut = {
    color: "white",
  };
  return (
    <>
      <Header />
      <Banner title="Crear cuenta" />
      <H2>
        <h3>Datos de acceso</h3>
      </H2>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple
            type="email"
            className="is-small"
            placeholder="Correo electrónico"
          />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple placeholder="Nombre de usuario" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple type="password" placeholder="Contraseña" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple type="password" placeholder="Confirmar contraseña" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-quarter is-narrow is-centered">
          <button className="button is-black is-rounded is-outlined is-hovered is-small is-centered">
            <Link className="is-white" to="/register/">
              <H2>
                <h4>Regresar</h4>
              </H2>
            </Link>
          </button>
          <button className="button is-rounded is-hovered is-small is-centered">
            <Link to="/register/s2">Continuar</Link>
          </button>
        </div>
      </Columnas>
      <GlobalStyle />
    </>
  );
}

export default reg;
