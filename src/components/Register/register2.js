import React from "react";
// Components
import Header from "../Header/index2";
import Banner from "../Banner/index2";
import { GlobalStyle, Columnas, H2, H3, Bloque } from "../../GlobalStyle";
import { Link } from "react-router-dom";
function reg() {
  return (
    <>
      <Header />
      <Banner title="Crear cuenta" />
      <H2>
        <h2>Confirmación</h2>
      </H2>
      <H3>
        <h3>Acerca de ti</h3>
        <Bloque>
          <div>
            <h2>Nombre:</h2>
            <p>Algo</p>
          </div>
          <div>
            <h2>Fecha de nacimiento:</h2>
            <p>Algo</p>
          </div>
        </Bloque>
      </H3>
      <H3>
        <h3>Datos de acceso</h3>
        <Bloque>
          <div>
            <h2>Nombre de usuario:</h2>
            <p>Algo</p>
          </div>
          <div>
            <h2>Correo electrónico:</h2>
            <p>Algo</p>
          </div>
        </Bloque>
      </H3>
      <Columnas className="columns is-centered">
        <div className="column is-one-quarter is-narrow is-centered">
          <button className="button is-black is-rounded is-outlined is-hovered is-small is-centered">
            <Link to="/register/s1">
              <H2>
                <h4>Regresar</h4>
              </H2>
            </Link>
          </button>
          <button className="button is-rounded is-hovered is-small is-centered">
            Crear Cuenta
          </button>
        </div>
      </Columnas>
      <GlobalStyle />
    </>
  );
}

export default reg;
