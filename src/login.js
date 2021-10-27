import React from "react";
// Components
import Header from "./components/Header/index2";
import Banner from "./components/Banner/index2";
import FormSimple from "./components/FormSimple/";
import { GlobalStyle, Columnas, H2 } from "./GlobalStyle";
import { Link } from "react-router-dom";

function login() {
  const entrar = async () => {
    const url = "https://historiasdeterror.herokuapp.com/v1/usuarios/entrar";
    const pass = document.getElementById("pass");
    const email = document.getElementById("email");
    let cuerpo = { password: `${pass.value}`, email: `${email.value}` };
    console.log(cuerpo);
    let result = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(cuerpo),
      // mode: "no-cors",
    }).then(async (res) => await res.json()).then((res) => console.log(res)).catch((err) => console.log(err));
    return result;
  };
  // let entrar=(url)=>{
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {'Authorization': "Bearer" + " " + token}
  // }).then((result) => result.json())
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
          <FormSimple id="email" placeholder="Correo electronico" />
        </div>
      </Columnas>
      <Columnas className="columns">
        <div className="column is-one-third"></div>
        <div className="column is-one-third">
          <FormSimple type="password" id="pass" placeholder="Contraseña" />
        </div>
      </Columnas>
      <div className="columns is-centered">
        <div className="column is-narrow">
          <button
            onClick={entrar}
            className="button is-rounded is-hovered is-small is-centered"
          >
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
