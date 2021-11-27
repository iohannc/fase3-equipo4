import React, { useEffect } from "react";
// Components
import Header from "./components/Header/index3";
import MainHistoria from "./components/historia/index";

import { GlobalStyle } from "./GlobalStyle";
import { useParams } from "react-router-dom";

function IsHistoria() {
  let { titulo } = useParams();
  let datos = function () {
    let username = document.cookie.split('; ').find(row => row.startsWith('user='))
    if (username) {
      username = username.split('=')[1];
    } else {
      username = ""
    }
    document.getElementById("username").innerHTML = "  " + username;
  }
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    datos();
  });
  return (
    <>
      <Header />
      <MainHistoria show={titulo} />
      <GlobalStyle />
    </>
  );
}

export default IsHistoria;
