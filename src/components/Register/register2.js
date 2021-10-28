import React, { useEffect } from "react";
// Components
import Header from "../Header/index2";
import Banner from "../Banner/index2";
import { GlobalStyle, Columnas, H2, H3, Bloque } from "../../GlobalStyle";
import { Link, useHistory } from "react-router-dom";
function RegStep2() {
  let history = useHistory();
  let datos = function () {
    const nombre = document.cookie.split('; ').find(row => row.startsWith('nombre=')).split('=')[1];
    const apellido = document.cookie.split('; ').find(row => row.startsWith('apellidos=')).split('=')[1];
    const email = document.cookie.split('; ').find(row => row.startsWith('email=')).split('=')[1];
    const password = document.cookie.split('; ').find(row => row.startsWith('password=')).split('=')[1];
    const username = document.cookie.split('; ').find(row => row.startsWith('user=')).split('=')[1];
    const username1 = document.getElementById("username").innerHTML = username;
    const nombre1 = document.getElementById("nombre").innerHTML = nombre + " " + apellido;
    const email1 = document.getElementById("mail").innerHTML = email;
  }
  let continuar = async function () {
    const url = "https://historiasdeterror.herokuapp.com/v1/usuarios/";
    let result2 = {};
    const nombre = document.cookie.split('; ').find(row => row.startsWith('nombre=')).split('=')[1];
    const apellido = document.cookie.split('; ').find(row => row.startsWith('apellidos=')).split('=')[1];
    const email = document.cookie.split('; ').find(row => row.startsWith('email=')).split('=')[1];
    const password = document.cookie.split('; ').find(row => row.startsWith('password=')).split('=')[1];
    const username = document.cookie.split('; ').find(row => row.startsWith('user=')).split('=')[1];
    let cuerpo = { "administrador": "false", "username": username, "nombre": nombre, "apellido": apellido, "email": email, "password": password };
    console.log(cuerpo)
    let a = false;
    await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(cuerpo),
    }).then(async (res) => await res.json()).then((res) => {
      console.log(res);
      a = true;
      result2 = res;
      let result = res.user;
      document.cookie = `user=${result.username}`;
      document.cookie = `token=${result2.token}`;
      alert("Cuenta creada con exito");
    }).catch((err) => {
      console.log(err);
    });
    if (a) {
      alert("Creacion de cuenta exitoso");
      history.replace("/")
    }
    if (!a) {
      alert("Creacion de cuenta fallido");
    }
  }
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    datos();
  });
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
            <p id="nombre">Algo</p>
          </div>
          {/* <div>
            <h2>Fecha de nacimiento:</h2>
            <p id="fecha">Algo</p>
          </div> */}
        </Bloque>
      </H3>
      <H3>
        <h3>Datos de acceso</h3>
        <Bloque>
          <div>
            <h2>Nombre de usuario:</h2>
            <p id="username">Algo</p>
          </div>
          <div>
            <h2>Correo electrónico:</h2>
            <p id="mail">Algo</p>
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
          <button onClick={continuar} className="button is-rounded is-hovered is-small is-centered">
            Crear Cuenta
          </button>
        </div>
      </Columnas>
      <GlobalStyle />
    </>
  );
}

export default RegStep2;
