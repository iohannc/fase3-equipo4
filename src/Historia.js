import React, { useEffect } from "react";
// Components
import Header from "./components/Header/index3";
import Banner from "./components/Banner/index";
import Stories from "./components/Stories/index";
import MainHistoria from "./components/historia/index";

import { GlobalStyle, Ids } from "./GlobalStyle";
import { useParams } from "react-router-dom";

function IsHistoria() {
  let { titulo } = useParams();
  let datos = function () {
    const username = document.cookie.split('; ').find(row => row.startsWith('user=')).split('=')[1] || "";
    document.getElementById("username").innerHTML = " " + username;
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
