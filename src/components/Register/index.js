import React from "react";
// Components
import Header from "../Header/index2";
import Banner from "../Banner/index2";
import FormSimple from "../FormSimple";
import { GlobalStyle, Columnas, H2 } from "../../GlobalStyle";
import { Link, useHistory } from "react-router-dom";
function RegStep0() {
  let history = useHistory();
  const continuar = async () => {
    const ap1 = document.getElementById("Apellido1").value;
    const ap2 = document.getElementById("Apellido2").value;
    const nombre = document.getElementById("Nombre").value;
    let apellidos = ap1 + " " + ap2;
    if (nombre !== "" && ap1 !== "" && ap2 !== "") {
      document.cookie = `apellidos=${apellidos}`;
      document.cookie = `nombre=${nombre}`;
      history.push("s1");
    }

  };
  return (
    <>
      <Header />
      <Banner title="Crear cuenta" />
      <H2>
        <h3>Acerca de ti</h3>
      </H2>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple id="Nombre" className="is-small" placeholder="Nombre(s)" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple id="Apellido1" placeholder="Apellido paterno" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple id="Apellido2" placeholder="Apellido materno" />
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
          <button onClick={continuar} className="button is-rounded is-hovered is-small is-centered">
            Continuar
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

export default RegStep0;
