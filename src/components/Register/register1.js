import React from "react";
// Components
import Header from "../Header/index2";
import Banner from "../Banner/index2";
import FormSimple from "../FormSimple";
import { GlobalStyle, Columnas, H2 } from "../../GlobalStyle";
import { Link, useHistory } from "react-router-dom";
function RegStep1() {
  let history = useHistory();
  //const [isBlocking, setIsBlocking] = React.useState(true);
  let continuar = function () {
    function isEqual(str1, str2) {
      return str1.toUpperCase() === str2.toUpperCase()
    }
    const mail = document.getElementById("mail").value;
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const username = document.getElementById("username").value;
    document.cookie = `email=${mail}`;
    document.cookie = `user=${username}`;
    if (isEqual(pass1, pass2) && username !== pass1 && username !== "" && pass1 !== "" && mail !== "") {
      document.cookie = `password=${pass1}`;
      history.replace("s2");
    }
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
            id="mail"
          />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple id="username" placeholder="Nombre de usuario" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple id="pass1" type="password" placeholder="Contraseña" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-third is-narrow">
          <FormSimple id="pass2" type="password" placeholder="Confirmar contraseña" />
        </div>
      </Columnas>
      <Columnas className="columns is-centered">
        <div className="column is-one-quarter is-narrow is-centered">
          <button className="button is-black is-rounded is-outlined is-hovered is-small is-centered">
            <Link to="/register/">
              <H2>
                <h4>Regresar</h4>
              </H2>
            </Link>
          </button>
          <button onClick={continuar} className="button is-rounded is-hovered is-small is-centered">
            Continuar
          </button>
        </div>
      </Columnas>
      <GlobalStyle />
    </>
  );
}

export default RegStep1;
